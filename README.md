# Gladly Test Application

This Node.js application reads a CSV file and sends the information of each row using Gladyl's Create Conversation item API.
It shows a success or error message for each record and includes error handling if it cannot read the CSV file.

## Prerequisites
Ensure you have Node.js installed on your machine.

## Installation

1. Clone the repository or download the files.
2. Navigate to the project directory.
3. Initialize Node.js project. You can type this on your terminal
   npm init -y 
4. Run `npm install` to install the required libraries. You can type this on your terminal
    npm install axios csv-parser dotenv


## Configuration

1. Create a `.env`file in the project directory
2. Add the sensitive information (API authorization hearder) to the `.env` file:
    AUTH_HEADER=Your_Auth_Header_Here
Replace Your_Auth_Header_Here with your real authorization header. You will get the AUTH_HEADER from your email and API Key generated on the Gladly website
3. Ensure that the `.env`file is secured and do not share it.

## Usage

1. Place your `sample-exercise.csv` file in the project directory. The CSV file should contain the following columns: email, title and body
2. Run the application using the following command in your terminal:
    node gladly.js
You will see messages after running the API for each record and also when the entire CSV file is processed.

## Error Handling
If there are issues reading the CSV file or sanding data to the API, error messages will be displayed in the terminal.
