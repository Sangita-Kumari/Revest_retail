# Revest_retail

# Description
RevestRetail is a Node.js application built using the Express.js framework. This service manages sales orders and products, connects to a PostgreSQL database, and integrates with a third-party API to push sales transaction details.

# Setup
Prerequisites-
Node.js (version 14 or later recommended)
PostgreSQL 
npm (Node Package Manager)
Installation
Clone the Repository:

git clone https://github.com/Sangita-Kumari/Revest_retail.git
Navigate to the Project Directory:


npm install
This command installs all the necessary dependencies listed in package.json.

Configuration
Create a .env File:

In the root directory of the project, create a file named .env

Add Configuration Values:

# Populate the .env file with the following environment variables:

# Database Configuration
DB_HOST: The hostname or IP address of your database server.
DB_PORT: The port number on which your database is running (e.g., 5432 for PostgreSQL).
DB_USERNAME: The username for your database.
DB_PASSWORD: The password for your database.
DB_NAME: The name of your database.

# Third Party API Configuration

THIRD_PARTY_API_URL: The URL of the third-party API.
THIRD_PARTY_API_KEY: The API key for accessing the third-party API.

