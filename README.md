# Meganopteryx DOTCOM

A React + TypeScript + Vite site

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Modal system (developer notes)

The `feature/case-study-tweaks` branch adds a small global modal system. Quick notes:

- `ModalProvider` is mounted in `src/main.tsx` so the modal manager is available globally.
- `useModal()` is available from `src/hooks/useModal.ts` and returns `{ openModal, closeModal, openConfirm }`.
- `openModal(node, opts?)` opens a modal with the supplied React node as content.
- `closeModal(id?)` closes the top modal or the modal with a specific id.
- `openConfirm(renderer)` is a Promise-based convenience for confirm-style dialogs and remains available.
- `Modal` uses `focus-trap` for keyboard focus trapping and manages scroll lock, Escape-to-close, and click-outside-to-close.

Example usage is in the project root README section created on the branch; see `src/hooks/useModal.ts` and `src/components/modal-context.tsx` for implementation details.

