# Interactive CLI to quickly setup new or enrich existing react project

## Features

- Initialize new project
- Setup tools
- Create basic components

---

## Initialize new project

You can choose what template you want to initialize, it will use official CLI to create project (ex: if you choose **CRA** it will execute <code>npx create-react-app</code>)

For now templates are available:

- vite react-ts

Plan to add:

- create-react-app
- next.js
- vite-plugin-ssr

## Setup tools

Tools available to setup:

- Typescript
- Prettier
- ESLint + plugins (TS, jsx-a11y, import, prettier, react)
- Husky
- Commit lint
- Tailwind
- Formik
- Yup
- XState
- Http service (creates abstract Http class using axios)

## Create components

Components available to create:

- Button
- Input
- Label
- Preloader
- Modal
- Checkbox
- Action modal

New components will be added

Note: These components use tailwind classes for styling
