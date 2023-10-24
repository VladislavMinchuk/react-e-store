# React + TypeScript + Vite

Project in progerss.

### Main branches
-   `main`  - always  **stable**  and  **release ready**  branch;
-   `develop`  - default branch, contains latest  **features**  and  **fixes**, on which developers should orient;
-   `feature/***`  - branches feature development and dependencies update;
-   `realese/***`  - branches for release(production) version;
-   `hotfix/***`  - branches for release  `fixes`;
### Quick flow description
1.  `git checkout develop`  `git pull origin develop`
2.  Create your feature branch (for example): `git checkout -b feature/nice-component`
3. After you made your changes: `git add changed-file` `git commit -m "Commit message"` `git push -u origin feature/nice-component`
4.  Create a Pull Request (PR) targeting the  `develop`  branch and call for any DEV to review it
5.  Do the requested changes, if necessary, until approval
6.  Merge into  `develop`  and delete your feature branch:
- delete remote branch: `git push origin -delete feature/nice-component`
- delete local branch: `git branch -d feature/nice-component` (checkeout at `develop`branch before deleting)
7.  QA Test
8.  After QA and PO approval, create a PR targeting the  `main`, branch
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
