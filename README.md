# TOTLE-TOPIC-API

A simple RESTful API for managing topics used by the TOTLE project. This repository provides the server-side endpoints, example requests, and setup instructions to run the API locally.

## Features

- CRUD endpoints for topics
- JSON request/response format
- Simple configuration via environment variables

## Requirements

- Node.js 14+ (or compatible)
- npm or yarn

## Installation

1. Clone the repository:

   git clone https://github.com/korupolujayanth2004/TOTLE-TOPIC-API.git
   cd TOTLE-TOPIC-API

2. Install dependencies:

   npm install
   # or
   yarn install

3. Create a .env file (example values):

   PORT=3000
   NODE_ENV=development
   DATABASE_URL="sqlite://./dev.db" # or your preferred DB URL

4. Run migrations (if any) and start the server:

   npm run migrate
   npm start

## Usage

The API serves JSON endpoints under /api. Example endpoints (adjust paths to match the implementation in this repo):

- GET /api/topics           - List all topics
- GET /api/topics/:id       - Get a single topic by id
- POST /api/topics          - Create a new topic
- PUT /api/topics/:id       - Update a topic
- DELETE /api/topics/:id    - Delete a topic

Example cURL request to create a topic:

curl -X POST http://localhost:3000/api/topics \
  -H "Content-Type: application/json" \
  -d '{"name":"Example topic","category":"General","description":"A short description"}'

## Example API responses

Below are real example requests and responses from a running instance (localhost:3000) to demonstrate search and sorting behavior.

1) Search for "api":

GET http://localhost:3000/api/topics?search=api

```json
[{"id":6,"name":"REST API Principles","category":"Backend"}]
```

2) Search for "backend" and sort by name:

GET http://localhost:3000/api/topics?search=backend&sort=name

```json
[
    {
        "id": 3,
        "name": "Express Routing",
        "category": "Backend"
    },
    {
        "id": 2,
        "name": "Node.js Fundamentals",
        "category": "Backend"
    },
    {
        "id": 6,
        "name": "REST API Principles",
        "category": "Backend"
    }
]
```

3) Search for "backend" (default ordering):

GET http://localhost:3000/api/topics?search=backend

```json
[{"id":2,"name":"Node.js Fundamentals","category":"Backend"},{"id":3,"name":"Express Routing","category":"Backend"},{"id":6,"name":"REST API Principles","category":"Backend"}]
```

These examples show how the search endpoint filters topics by the provided query and how an optional sort parameter can change the returned ordering.

## Environment Variables

Document any environment variables your app uses (example):

- PORT - port to run the server (default: 3000)
- DATABASE_URL - connection string for the database

## Tests

If tests exist, run them with:

npm test

## Contributing

Contributions are welcome. Please open an issue for discussion or submit a pull request with a clear description of changes and tests when appropriate.

## License

Specify a license for the project (e.g., MIT). If no license is chosen, include a LICENSE file or update this section accordingly.

## Contact

Created by korupolujayanth2004. For questions or feedback, open an issue on this repository.