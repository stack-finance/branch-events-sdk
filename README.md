# branch-events-sdk
`branch-events-sdk` is a service designed to call the branch.io API route using Typescript. This project is licensed under MIT.

## Getting Started

### Prerequisites
- Node.js
- a branch.io account with an application created.
- Branch IO key for the created application.

## Installation
```bash
npm i @stack-finance/branch-events-sdk
```
### 🔧 Configuration for Apps Using This Package  
Since this package is hosted on GitHub's npm registry, you must configure your **.npmrc** file in the consuming application:  

1. **Create (or update) `.npmrc` in your project root** and add the following line:  
   ```ini
   @stack-finance:registry=https://npm.pkg.github.com
   ```
2. Ensure you have an **auth token** to install private packages. You can use a **GitHub Personal Access Token (PAT)**:  
   - Generate a token with the `read:packages` scope from [GitHub Developer Settings](https://github.com/settings/tokens).  
   - Run the following command to authenticate:  
     ```bash
     npm login --scope=@stack-finance --registry=https://npm.pkg.github.com
     ```
   - Alternatively, add this to your `~/.npmrc` (global config) or your project’s `.npmrc`:  
     ```ini
     //npm.pkg.github.com/:_authToken=YOUR_GITHUB_PERSONAL_ACCESS_TOKEN
     ```

---
## Contributing  
Before making any changes, please follow these strict guidelines:

1. **Follow [Semantic Versioning](https://semver.org/).**  
   TL;DR:  
   - Any fix that **does not** break expected behavior is a **patch** (`x.x.+1`).  
   - Any new feature that **does not** break behavior is a **minor** version change (`x.+1.x`).  
   - Any feature/fix that **will break** behavior is a **major** version change (`+1.x.x`).  

2. **Handle breaking changes carefully.**  
   - Avoid breaking changes when possible.  
   - If necessary, **deprecate** a function before removing it.  
   - Introduce a **new function** to replace the deprecated one and update the documentation.  
   - **Only if unavoidable**, modify an existing function directly.

3. **Ensure type definitions are updated.**  
   - All functions must have proper TypeScript type annotations.  
   - If a function is deprecated, update its type definition accordingly.

. **Optimize utility functions.**  
   - If a function is **only a 1-2 line simple operation**, keep it inline.  
   - If it’s **more than 2 lines and reused multiple times**, move it to `utils/`.

---

## Publishing  

Before publishing, ensure you are logged into the GitHub npm registry:

```bash
npm login --scope=@stack-finance --registry=https://npm.pkg.github.com
```

### Steps to Publish:
1. Increment the package version following the [Contributing](#contributing) guidelines.
2. Run a dry-run to verify what will be published:
   ```bash
   npm publish --dry-run
   ```
3. If everything looks correct, publish the package:
   ```bash
   npm publish
   ```
   **⚠️ Do not use `--access public`, as this is a private package.**
4. Update dependent services to use the latest version.
