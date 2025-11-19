TOTLE TOPIC API — Coding Round Submission

# Backend Developer Intern — Round 1

This repository contains my solution to the Totle Backend Developer Intern coding assignment. The task was to build a simple Topic Retrieval API using Node.js + Express, reading data from a JSON file and supporting search and optional sorting.

## 🚀 Features Implemented

- ✔ GET /api/topics?search=<query>
  - Search topics by name or category (case-insensitive).
- ✔ Optional Sorting
  - `&sort=name` → sort results alphabetically by name.
- ✔ Proper Error Handling
  - Missing `search` → 400
  - File or server error → 500
- ✔ Clean folder structure
- ✔ Uses `topics.json` as data source
- ✔ Bonus: Search checks both `name` & `category`

## 📂 Project Folder Structure

```
TOTLE-TOPIC-API/
├── README.md
├── .gitignore
├── package.json
└── src/
    ├── app.js
    ├── routes/
    │   └── topics.js
    └── data/
        └── topics.json
```

## 🛠 Installation & Setup

1. Install dependencies

```
npm install
```

2. Start the server

```
npm start
```

Server runs at: `http://localhost:3000`

## 🔍 API Usage

### 1) Search topics

```
GET http://localhost:3000/api/topics?search=api
```

Example output:

```json
[
  {
    "id": 6,
    "name": "REST API Principles",
    "category": "Backend"
  }
]
```

### 2) Search + Sort

```
GET http://localhost:3000/api/topics?search=backend&sort=name
```

### 3) Invalid Search (missing `search` query)

```
GET http://localhost:3000/api/topics
```

Example error response (400):

```json
{
  "error": "Invalid query. Please provide a non-empty \"search\" query parameter."
}
```

## 📘 Step-by-Step Workflow (Required by Totle)

1. Client sends request to `/api/topics` with the `search` parameter.
2. Server validates that the search term is not empty (returns 400 if invalid).
3. The JSON file `topics.json` is read asynchronously.
4. The search term is converted to lowercase.
5. Topics are filtered where `name` or `category` contains the query.
6. If `sort=name` is passed, results are sorted alphabetically by `name`.
7. Final output returns only `{ id, name, category }` for each match.
8. 400 errors are returned for bad input; 500 for internal failures.

## 🎥 2-Minute Video Explanation

Video Link:

https://drive.google.com/file/d/1TzaVjxfU9q5LdiaKCFoaR7vX1N-DLjCg/view?usp=sharing

## 🔗 GitHub Repository Link

https://github.com/korupolujayanth2004/TOTLE-TOPIC-API

## 📦 What is Included in the ZIP (as required)

- Source code + folder structure
- README
- 2-minute explanation video (or video link)
- GitHub repo link

## 👨‍💻 Author

Korupolu Jayanth