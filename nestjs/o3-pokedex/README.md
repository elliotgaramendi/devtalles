<p align="center">
  <a href="https://nestjs.com/" target="_blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="NestJS logo" /></a>
</p>

## Quick Start

### Docker

Create `.env` from `.env.example` and configure your MongoDB Atlas URI.

```bash
cp .env.example .env
docker compose up --build -d
```

```bash
docker compose logs -f api
docker compose down
```

### Local

```bash
pnpm install
cp .env.example .env
pnpm start:dev
```

- Application: <http://localhost:3000>
- API: <http://localhost:3000/api/v2>
