# Light mode — scope and plan

Status: **not started.** Scoped 2026-09-10 against `feature/cleanup-styles-v2`.

The site is currently dark-only. This document records what a light theme would
actually require, so the work can be picked up without re-deriving the scope.

Estimated effort: **6–9 hours of code**, splittable into two independent halves.

---

## Summary

Smaller than it looks. Two findings drive the estimate:

**Images are almost entirely a non-issue.** Of 53 image assets, 49 are photographs
(case-study screenshots, portfolio shots, home/shop panels) that are
background-independent. Only 13 are color-dependent: the 11 social icons in
`src/assets/icons/`, `src/assets/bullet-arrow.svg`, and the logo. Asset rework is
usually what makes a light-mode retrofit expensive, and it mostly doesn't apply here.

**The CSS surface is small.** 1,323 lines across 18 files, with roughly 80 color
`var()` usages in total.

The logo is already half-done — `src/assets/Logo-dark.svg` exists, and
`src/components/icons/MeganopteryxLogo.tsx` has a commented-out `<picture>` element
with a `prefers-color-scheme` source.

---

## How the theming mechanism works

Custom properties inherit and cascade, so a theme is just a scoped redefinition —
no component edits, no JS in the styling path:

```css
:root                    { --text-primary: #ffffff; }
html[data-theme="light"] { --text-primary: #1a1a1a; }
```

**`var()` resolves at use time, not definition time.** A token composed from other
tokens recomputes for free. `--glow-blue-accent` (globals.css:73) is built from
`var(--blue-accent)`, and `--background-gradient` (line 69) from its four stop
variables — override the inputs and both follow automatically, without being
redefined.

Because of that decomposition, a first-pass light theme is roughly eight lines:

```css
html[data-theme="light"] {
  --dark-bg: #f7f8f9;
  --light-text: #1a1a1a;
  --brand-card-bg: #ffffff;
  --brand-card-bg-hover: #eef0f2;
  --blue-accent: #1f7d8a;          /* darker — passes AA on white */
  --background-gradient-stop-1-color: #ffffff;
  --background-gradient-stop-2-color: #e8edf1;
  --image-panel-glow: inset 0 0 8px 8px rgb(0 0 0 / 0.08);
}
```

This is why steps 1–3 are the bulk of the work: once names are semantic and the
hardcoded colors are tokenized, the theme itself is nearly free.

### Gotchas

- **Specificity ties.** `:root` and `[data-theme="light"]` are both (0,1,0), so
  source order breaks the tie — an override placed above `:root` silently does
  nothing. Use `html[data-theme="light"]` (0,1,1) and place it after.
- **Media queries can't read `var()`** — same constraint already noted at the top of
  `globals.css`; breakpoints stay literal.
- **Custom properties don't animate** unless registered via `@property` with a
  `syntax` descriptor; they jump discretely otherwise. For a theme swap, transition
  `background-color`/`color` on `body` instead.

### Setting tokens from TSX

- **Theme-wide:** `document.documentElement.dataset.theme = 'light'`.
- **Per-instance:** `style={{ '--card-accent': color } as React.CSSProperties}` — the
  cast is required, as `CSSProperties` rejects arbitrary `--` keys. Would tidy the
  `bgColor` props in `src/pages/Home.tsx:16-17`.
- **Subtree scoping:** any selector can redefine tokens, e.g. keeping code blocks dark
  in light mode. Also the natural home for the orphaned grey at `index.css:183`.

---

## Steps 1–3 — refactor (no visual change)

These are worth doing regardless of whether light mode ships. They involve no design
decisions and produce no visual change.

### 1. Delete dead tokens

Five tokens in `src/styles/globals.css` are referenced zero times anywhere in the
codebase:

- `--brand-highlight`
- `--brand-glow`
- `--teal-accent`
- `--teal-dark`
- `--warm-neutral`

*~15 minutes.*

### 2. Rename remaining tokens to semantic roles

The current names describe literal appearance rather than role, so they become
self-contradictory under a second theme — `--light-text: #ffffff` would need to hold
near-black in light mode.

| current | suggested | usages |
|---|---|---|
| `--blue-accent` | `--accent-primary` | 35 |
| `--light-text` | `--text-primary` | 23 |
| `--glow-blue-accent` | `--accent-glow` | 7 |
| `--brand-card-bg` | `--surface-raised` | 6 |
| `--dark-bg` | `--surface-base` | 4 |
| `--teal-grey` | `--accent-muted` | 2 |
| `--brand-card-bg-hover` | `--surface-raised-hover` | 1 |
| `--image-panel-glow` | `--surface-panel-glow` | 1 |
| `--background-gradient` | *(keep)* | 1 |

Once names are role-based, a light theme is a single `[data-theme="light"]` block
redefining values — no component or usage-site edits.

*1–2 hours, mechanical.*

### 3. Tokenize hardcoded colors

24 hardcoded color values sit outside the token system. This step must be complete or
light mode will leak dark patches.

Two significant clusters:

- **`src/components/mdx/Callout.tsx`** — 8 inline-style hex values that assume a dark
  background (lines 23–70).
- **`src/components/modal/Modal.css`** — 6 untokenized `rgba()` blues (lines 85–117).

Scattered singles in `Button.css`, `Tag.css`, `ShopCard.css`, `HomeCard.css`,
`index.css`, and `src/pages/Home.tsx` (two `bgColor` props passed inline).

*2–3 hours. The most tedious step.*

---

## Steps 4–6 — theming (depends on 1–3)

### 4. Social icons via CSS `mask-image`

The 11 SVGs in `src/assets/icons/` have `fill="white"` baked in and are rendered as
`<img>` in `SocialIcons.tsx`, so they can't be recolored.

Preferred approach — leave the SVG files untouched and let CSS paint them:

```css
.socialIcons-link span {
  background-color: currentColor;
  mask-image: url('../assets/icons/github.svg');
  mask-size: contain;
  -webkit-mask-image: url('../assets/icons/github.svg');
  -webkit-mask-size: contain;
}
```

The SVG becomes a stencil and `background-color` paints through it. Files stay hashed,
cached, and out of the JS bundle. Multi-color icons become impossible, but all 11 are
single-color glyphs, so nothing is lost.

Alternatives considered: hand-converting each to TSX with `fill="currentColor"` (most
control, tedious for 11 files); or `vite-plugin-svgr` with SVGO's
`convertColors: { currentColor: true }` (good if many more icons are coming, but moves
icons into the JS bundle).

**Note:** new icon components should use `fill="currentColor"` — not a color prop. A
prop forces every call site to know the active theme; `currentColor` inherits from the
CSS cascade automatically. `src/components/icons/GalleryIcon.tsx` already does this.

Also fixes `SocialIcons.css:31`, where `filter: brightness(1.15)` on hover is a no-op
against dark icons on a light ground.

*~1 hour.*

### 5. Theme switching mechanism

`data-theme` attribute on `<html>`, a toggle control, and `localStorage` persistence.
Requires a small inline script in `index.html` that sets the attribute *before first
paint* — otherwise the page flashes dark on load for light-mode users.

*1–2 hours.*

### 6. Enable the logo swap

Uncomment the `<picture>` block in `MeganopteryxLogo.tsx` and change the trigger from
the `prefers-color-scheme` media query to the `data-theme` attribute, so the manual
toggle drives it rather than the OS setting alone.

*~10 minutes.*

---

## Open design questions

These are decisions, not code, and should be settled before step 2 bakes names in.

**Glow effects don't translate.** `--glow-blue-accent` (7 uses), `--image-panel-glow`,
and the `text-shadow` rules in `ShopCard.css:51` and `HomeCard.css:60` are dark-mode
idioms — a light halo on a dark ground. On white they read as invisible or muddy. A
different treatment is needed (borders, soft drop shadows). This is the main unknown.

**`--blue-accent` fails contrast on white.** `#8fd9e0` is 3.4:1 against white, below
WCAG AA for text. A darker paired value is needed for light mode. This overlaps with
the blue-accent palette work in progress in Figma — worth settling there first.

---

## Recommended sequencing

Steps 1–3 are pure cleanup and can land on `feature/cleanup-styles-v2` immediately.
They improve the codebase whether or not light mode ships, and they convert light mode
from an open-ended project into a well-defined 2–3 hour task.

Steps 4–6 wait until the Figma palette settles and the glow treatment is decided.
