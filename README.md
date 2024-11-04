# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Running the Project Locally

1. **Clone the Repository**: Clone the repository to your local machine.
2. **Install Dependencies**: Run `npm install` to install all required dependencies.
3. **Start the Development Server**: Run `npm run dev` to start the development server. You’ll see a link in the terminal. Visit that link to view the website locally.

## Building for Production

1. **Run the Build Command**: Execute `npm run build` to build the project for production.
2. **Locate the Build Files**: After building, a `dist` folder will be generated with all the bundled files.
3. **Deploy the Production Build**: You can deploy the contents of the `dist` folder to any web host, or serve it locally using a server such as `http-server`.

   - To serve the build locally, install a static file server like `http-server`:
     ```bash
     npm install -g http-server
     http-server dist
     ```
   - This will serve the production build locally.

## Expanding the ESLint Configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

1. **Configure the Top-Level `parserOptions`**:
   ```js
   export default tseslint.config({
     languageOptions: {
       // other options...
       parserOptions: {
         project: ["./tsconfig.node.json", "./tsconfig.app.json"],
         tsconfigRootDir: import.meta.dirname,
       },
     },
   });
   ```

## Switch to Type-Checked Configurations

Replace tseslint.configs.recommended with tseslint.configs.recommendedTypeChecked or tseslint.configs.strictTypeChecked.

## Install React ESLint Plugin

Install `eslint-plugin-react` and update the config as follows:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
