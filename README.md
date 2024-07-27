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

# **Database Configuration**
DB_HOST=your-database-host
DB_PORT=your-database-port
DB_USERNAME=your-database-username
DB_PASSWORD=your-database-password
DB_NAME=your-database-name

# **Third Party API Configuration**
THIRD_PARTY_API_URL=https://third-party-api.com/salesOrder
THIRD_PARTY_API_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9



