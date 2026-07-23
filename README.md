# Meganopteryx DOTCOM

A React + TypeScript + Vite site

Welcome to my website! I'm bullying Claude into helping me with this one sometimes. It's a work in progress. 

Also debating moving it to Astro so we get server-side rendering, which is nice for AI consumption (it can't seem to even see client-side rendered content which... hmmm). 

There's a balance between using the most up-to-date CSS styles and React tech, and getting the thing done, as usual. As soon as you publish something, it's out of date. The endless struggle.

## ✨ Expect weird random changes! ✨

I get to be indecisive on this project!

Maybe/maybe not.

## Modal system (Claude notes)

The `feature/case-study-tweaks` branch adds a small global modal system. Quick notes:

- `ModalProvider` is mounted in `src/main.tsx` so the modal manager is available globally.
- `useModal()` is available from `src/hooks/useModal.ts` and returns `{ openModal, closeModal, openConfirm }`.
- `openModal(node, opts?)` opens a modal with the supplied React node as content.
- `closeModal(id?)` closes the top modal or the modal with a specific id.
- `openConfirm(renderer)` is a Promise-based convenience for confirm-style dialogs and remains available.
- `Modal` uses `focus-trap` for keyboard focus trapping and manages scroll lock, Escape-to-close, and click-outside-to-close.

Example usage is in the project root README section created on the branch; see `src/hooks/useModal.ts` and `src/components/modal-context.tsx` for implementation details.

