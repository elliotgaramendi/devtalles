# Repository conventions

- Use the package manager selected by each project lockfile.
- Separate external imports from local imports with one blank line.
- Declare dependencies with an explicit semantic version range; do not use `*`.
- Before committing, run the relevant tests and production build. Run ESLint when the project state is expected to be lint-clean.

## `nestjs/o3-pokedex`

- Use `nest-o3` as the Conventional Commit scope. The `o3` identifier refers to this project's position in the NestJS learning series, so do not use `o3-pokedex` as the scope.
- Use `pnpm` for dependency management and project scripts.
- Use `api/v2` as the global API prefix. Static assets remain available from `/`.
- Keep static HTML and CSS in separate files under `public/`.
