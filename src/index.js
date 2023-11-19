const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let logs = []; // Simulated in-memory log storage, replace with database

// Endpoint for log ingestion via POST request to /logs
app.post('/logs', (req, res) => {
    const logData = req.body; // Extract log data from request body
    logs.push(logData); // Store logs in memory (replace with database storage)
    res.status(200).send('Log received successfully');
});

// Endpoint to query logs based on criteria
app.get('/logs', (req, res) => {
    const { level, message, resourceId, startTime, endTime } = req.query;

    // Filtering logs based on query parameters
    let filteredLogs = logs;
    if (level) filteredLogs = filteredLogs.filter(log => log.level === level);
    if (message) filteredLogs = filteredLogs.filter(log => log.message.includes(message));
    if (resourceId) filteredLogs = filteredLogs.filter(log => log.resourceId === resourceId);
    if (startTime && endTime) {
        filteredLogs = filteredLogs.filter(log => {
            const logTimestamp = new Date(log.timestamp);
            return logTimestamp >= new Date(startTime) && logTimestamp <= new Date(endTime);
        });
    }
    res.json(filteredLogs);
});

// Serve HTML file for the frontend
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Log ingestor and query API listening at http://localhost:${port}`);
});

// Endpoint to execute predefined queries
app.get('/query', (req, res) => {
    const { queryType } = req.query;

    switch (queryType) {
        case 'errorLogs':
            // Find all logs with the level set to "error"
            const errorLogs = logs.filter(log => log.level === 'error');
            res.json(errorLogs);
            break;
        case 'failedToConnectLogs':
            // Search for logs with the message containing the term "Failed to connect"
            const failedToConnectLogs = logs.filter(log => log.message.includes('Failed to connect'));
            res.json(failedToConnectLogs);
            break;
        case 'resourceIdLogs':
            // Retrieve all logs related to a specific resourceId
            const { resourceId } = req.query;
            const resourceIdLogs = logs.filter(log => log.resourceId === resourceId);
            res.json(resourceIdLogs);
            break;
        case 'timestampLogs':
            // Filter logs between the specified timestamp range
            const { startTime, endTime } = req.query;
            const timestampLogs = logs.filter(log => {
                const logTimestamp = new Date(log.timestamp);
                return logTimestamp >= new Date(startTime) && logTimestamp <= new Date(endTime);
            });
            res.json(timestampLogs);
            break;
        default:
            res.status(400).json({ error: 'Invalid query type' });
    }
});



