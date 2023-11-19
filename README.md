# Log Query System

A simple log ingestion and querying system built using Node.js and Express.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [System Design](#system-design)
- [Features](#features)
- [Endpoints](#endpoints)
- [Known Issues](#known-issues)
- [Contributing](#contributing)

## Introduction

The Log Query System is designed to handle log ingestion and querying over HTTP. It offers functionalities to ingest logs, query logs based on various criteria, and execute predefined queries.

## Installation

First, ensure you have Node.js installed on your system. Then, follow these steps:

Initialize a Node.js project:
Create a new directory and run npm init within it to create a package.json file to manage dependencies.

Install necessary packages:
Install Express.js, a popular Node.js web application framework, to handle HTTP requests:

 `npm install express`
 
 Create the log ingestor(index.js)

Run the log ingestor:
Execute the Node.js application by running:

`node index.js`

The populateLogs function iterates through this array and sends each log object as a POST request to the log ingestor endpoint (http://localhost:3000/logs in this example).

Make sure the log ingestor backend is running on http://localhost:3000 before executing this script to populate the logs.

To run the script, execute the following command in the terminal:

`node populateLogs.js`

## Usage

- **Log Ingestion:** Send POST requests to `/logs` to ingest logs.
- **Log Querying:** Use GET requests to `/logs` with query parameters to filter logs.
- **Predefined Queries:** Access predefined queries via GET requests to `/query`.

## System Design

The system architecture is built using Node.js and Express for handling HTTP requests. It currently utilizes in-memory storage for logs but aims to transition to a database for production use.

### Endpoints

- `POST /logs`: Ingest logs into the system.
- `GET /logs`: Query logs based on specified criteria.
- `GET /query`: Execute predefined queries for log retrieval.

## Features

- **Log Ingestion:**
  - Allows ingestion of logs via POST request to `/logs`.
- **Log Querying:**
  - Enables querying logs based on various criteria using the `/logs` endpoint.
- **Predefined Queries:**
  - Supports predefined queries for error logs, message-based logs, resourceId-based logs, and timestamp-based logs via the `/query` endpoint.
- **Frontend Interface:**
  - Provides a basic HTML interface for user interaction.

## Known Issues

- **In-Memory Storage:**
  - Current implementation uses in-memory storage for logs, not suitable for large-scale production. Replace it with a persistent database for scalability and data integrity.
- **Limited Error Handling:**
  - Improved error handling can be implemented for various scenarios like invalid queries or server errors.
- **Security Measures:**
  - The system lacks security measures like authentication or input validation, which are crucial for real-world applications.
- **Scalability:**
  - For high volumes of logs, the system might face scalability issues with the current in-memory storage.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.


### Clone the Repository

```bash
git clone https://github.com/yourusername/log-query-system.git
cd log-query-system


