TOTLE TOPIC API — Coding Round Submission

Backend Developer Intern — Round 1

This repository contains my solution to the Totle Backend Developer Intern coding assignment.
The task was to build a simple Topic Retrieval API using Node.js + Express, reading data from a JSON file and supporting search and optional sorting.

🚀 Features Implemented
✔ GET /api/topics?search=<query>

Search topics by name or category, case-insensitive.

✔ Optional Sorting

&sort=name → sort results alphabetically by name.

✔ Proper Error Handling

Missing search → 400

File or server error → 500

✔ Clean folder structure
✔ Uses topics.json as data source
✔ Bonus: Search checks both name & category

📂 Project Folder Structure

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

🛠 Installation & Setup

npm install

npm start


Server runs at:

http://localhost:3000

🔍 API Usage

1. Search topics

GET http://localhost:3000/api/topics?search=api


Example Output

[
  {
    "id": 6,
    "name": "REST API Principles",
    "category": "Backend"
  }
]

2. Search + Sort

GET http://localhost:3000/api/topics?search=backend&sort=name

3. Invalid Search

GET http://localhost:3000/api/topics


Output:

{
  "error": "Invalid query. Please provide a non-empty \"search\" query parameter."
}

📘 Step-by-Step Workflow (Required by Totle)

Client sends request to /api/topics with the search parameter.

Server validates that the search term is not empty.

JSON file topics.json is read asynchronously.

The search term is converted to lowercase.

Topics are filtered where name or category contains the query.

If sort=name is passed, results are sorted alphabetically.

Final output returns { id, name, category } only.

400 errors are returned for bad input; 500 for internal failures.

🎥 2-Minute Video Explanation

Video Link:

https://drive.google.com/file/d/1TzaVjxfU9q5LdiaKCFoaR7vX1N-DLjCg/view?usp=sharing

(or place video in ZIP as required)

🔗 GitHub Repository Link

https://github.com/korupolujayanth2004/TOTLE-TOPIC-API

📦 What is Included in the ZIP (as required)

Source code + folder structure

README

2-minute explanation video

GitHub repo link

👨‍💻 Author

Korupolu Jayanth