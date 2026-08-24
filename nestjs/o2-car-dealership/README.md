<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Car Dealership API

A simple NestJS API for managing cars and brands in memory.

## Setup

```bash
pnpm install
```

## Run

```bash
pnpm start:dev
```

The application runs on `http://localhost:3000` by default.

To use a different port:

```bash
PORT=3805 pnpm start:dev
```

## Seed data

Load the initial cars and brands:

```http
GET http://localhost:3000/seed
```

The data is stored in memory and resets when the application restarts.

## Endpoints

| Method   | Endpoint      | Description              |
| -------- | ------------- | ------------------------ |
| `GET`    | `/seed`       | Load the initial data    |
| `GET`    | `/cars`       | Get all cars             |
| `GET`    | `/cars/:id`   | Get a car by ID          |
| `POST`   | `/cars`       | Create a car             |
| `PATCH`  | `/cars/:id`   | Partially update a car   |
| `DELETE` | `/cars/:id`   | Delete a car             |
| `GET`    | `/brands`     | Get all brands           |
| `GET`    | `/brands/:id` | Get a brand by ID        |
| `POST`   | `/brands`     | Create a brand           |
| `PATCH`  | `/brands/:id` | Partially update a brand |
| `DELETE` | `/brands/:id` | Delete a brand           |

Executable request examples are available in [`api.http`](./api.http).

## Tests

```bash
pnpm test
pnpm test:e2e
```
