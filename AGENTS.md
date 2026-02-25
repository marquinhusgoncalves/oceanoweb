# Agents

## Cursor Cloud specific instructions

### Project overview
Oceano Web is a simple Gatsby v2 static landing page for a Brazilian web development company. It displays a centered animated logo linking to oceanoweb.com.br.

### Node.js version
Gatsby v2 requires **Node.js 14**. The environment uses nvm to manage this. Run `nvm use 14` before any npm/gatsby commands. If Node 14 is not installed, run `nvm install 14` first.

### Key commands
- **Dev server:** `npm run develop` (serves at `localhost:8000`)
- **Build:** `npm run build`
- **Format check:** `npx prettier --check "**/*.{js,jsx,json,md}"`
- **Format fix:** `npm run format`
- **Clean cache:** `npm run clean`

### Notes
- There are no automated tests in this project (the `test` script is a placeholder that exits with error).
- The `prettier --check` command reports pre-existing style issues in the codebase; this is expected.
- No environment variables, databases, or external services are required.
- To bind the dev server on all interfaces (useful for remote access), use: `npx gatsby develop --host 0.0.0.0`
