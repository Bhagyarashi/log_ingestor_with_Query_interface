const axios = require('axios');

// Sample log data
const logs = [
    {
        "level": "error",
        "message": "Failed to connect to DB",
        "resourceId": "server-1234",
        "timestamp": "2023-09-15T08:00:00Z",
        "traceId": "abc-xyz-123",
        "spanId": "span-456",
        "commit": "5e5342f",
        "metadata": {
            "parentResourceId": "server-0987"
        }
    },
    // Add more sample log objects as needed
];

// Function to populate logs by sending POST requests
async function populateLogs() {
    for (const log of logs) {
        try {
            await axios.post('http://localhost:3000/logs', log);
            console.log('Log sent:', log);
        } catch (error) {
            console.error('Error sending log:', error.message);
        }
    }
}

// Call the function to populate logs
populateLogs();
