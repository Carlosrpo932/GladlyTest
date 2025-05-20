const fs = require('fs');
const csv = require('csv-parser');
const axios = require('axios');
require('dotenv').config();

const API_URL = 'https://psinterview.gladly.qa/api/v1/conversation-items';
const AUTH_HEADER = process.env.AUTH_HEADER;

function newConversationItem(email, title, body) {
    const data = {
        customer: {
            emailAddress: email
        },
        content: {
            type: "CUSTOMER_ACTIVITY",
            title: title,
            body: body,
            activityType: "EMAIL"
        }
    };

// Run Create Conversation Item API
    return axios.post(API_URL, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': AUTH_HEADER
        }
    });
}

// Function to create a delay to avoid the "Too Many Requests" error
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Function to process the CSV file
async function processCSV() {
    const results = [];

// Read the CSV file and store the rows in array
fs.createReadStream('sample-exercise.csv')
    .pipe(csv())
    .on('data',  (row) => {
        results.push(row);
    })
   .on('end', async () => {
            console.log('CSV file successfully processed');

        for (const row of results) {
            const { email, title, body } = row;
            try {
            await delay(500);
            const response = await newConversationItem(email, title, body);
            console.log(`New conversation item was created for this record:`, response.data);
        } catch (error) {
                console.error(`Error sending for this item:`, error.response ? error.response.data : error.message);
        }
    }
    })
    
    //Error Handling
    .on('error', (error) => {
        console.error('Error reading the CSV file:', error.message);
    });
}

    // Start processing the CSV file
processCSV();