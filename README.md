# NX Nest Next Monorepo

A full-stack monorepo application using Next.js for the frontend and NestJS for the backend, built with Nx.

## Features

### Development Environment

- 🚀 Hot Module Replacement (HMR) for both frontend and backend
- 🔄 Automatic browser refresh on file changes
- 🔍 Source maps for debugging
- 🔗 API proxy from frontend to backend
- 🌐 CORS enabled for development
- 📦 Workspace-based dependency management

### Frontend (Next.js)

- ⚛️ React 19 with TypeScript
- 🎨 Modern UI development
- 📱 Responsive design support
- 🔄 Fast refresh enabled
- 📦 Optimized production builds

### Backend (NestJS)

- 🏗️ Modular architecture
- 🔐 API routing with prefix
- 📡 WebSocket support
- 🔄 Hot reload enabled
- 📦 Production-ready builds

### Development Tools

- 🛠️ Concurrent process management
- 🔍 Browser-sync for live reloading
- 📝 TypeScript support
- 🧹 Linting and formatting
- 🔍 Debugging support

## Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)
- Git

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/steve-phan/nx-nest-next

# Navigate to the project directory
cd nx-nest-next

# Install dependencies
npm install
```

### Development

To start the development environment:

```bash
# Start both client and server in development mode
npm run dev
```

This will start:

- Next.js development server on http://localhost:3001
- NestJS server on http://localhost:3000
- Browser-sync proxy on http://localhost:3002

Access your application through http://localhost:3002 for the best development experience.

#### Development Features

- Hot reloading for both frontend and backend
- Automatic browser refresh on file changes
- API requests are proxied to the backend
- Source maps for debugging
- CORS enabled for development

### Production Build

To build the application for production:

```bash
# Build both client and server
npm run build
```

This will:

- Build the Next.js frontend with production optimizations
- Build the NestJS backend with production optimizations
- Generate static files for the frontend
- Compile TypeScript to JavaScript

### Production Deployment

To start the production server:

```bash
# Start the production server
npm run start
```

The production server will:

- Serve static files from the Next.js build
- Handle API requests through NestJS
- Run on port 3000 by default (configurable via PORT environment variable)

## Project Structure

```
nx-nest-next/
├── packages/
│   ├── client/           # Next.js frontend application
│   │   ├── src/          # Source code
│   │   ├── public/       # Static files
│   │   └── package.json  # Frontend dependencies
│   │
│   └── server/           # NestJS backend application
│       ├── src/          # Source code
│       └── package.json  # Backend dependencies
│
├── package.json          # Root dependencies and scripts
└── tsconfig.base.json    # Base TypeScript configuration
```

## Available Scripts

### Development

- `npm run dev` - Start both client and server in development mode
- `npm run dev:client` - Start only the client in development mode
- `npm run dev:server` - Start only the server in development mode

### Build

- `npm run build` - Build both client and server
- `npm run build:client` - Build only the client
- `npm run build:server` - Build only the server

### Production

- `npm run start` - Start the production server

## Environment Variables

### Development

- `NODE_ENV=development` - Development environment
- `PORT=3000` - Server port (optional)

### Production

- `NODE_ENV=production` - Production environment
- `PORT=3000` - Server port (optional)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# NxNestNext

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/js?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/IfeTQGu2bZ)

## Generate a library

```sh
npx nx g @nx/js:lib packages/pkg1 --publishable --importPath=@my-org/pkg1
```

## Run tasks

To build the library use:

```sh
npx nx build pkg1
```

To run any task with Nx use:

```sh
npx nx <target> <project-name>
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Versioning and releasing

To version and release the library use

```
npx nx release
```

Pass `--dry-run` to see what would happen without actually releasing the library.

[Learn more about Nx release &raquo;](hhttps://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Keep TypeScript project references up to date

Nx automatically updates TypeScript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in `tsconfig.json` files to ensure they remain accurate based on your project dependencies (`import` or `require` statements). This sync is automatically done when running tasks such as `build` or `typecheck`, which require updated references to function correctly.

To manually trigger the process to sync the project graph dependencies information to the TypeScript project references, run the following command:

```sh
npx nx sync
```

You can enforce that the TypeScript project references are always in the correct state when running in CI by adding a step to your CI job configuration that runs the following command:

```sh
npx nx sync:check
```

[Learn more about nx sync](https://nx.dev/reference/nx-commands#sync)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/js?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
