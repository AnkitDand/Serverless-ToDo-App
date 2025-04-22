# Serverless ToDo App

A simple, serverless to-do application built with React, AWS Lambda, API Gateway, DynamoDB, and deployed via AWS S3. This project implements CRUD operations for task management, ensuring tasks are stored and managed in a highly scalable and cost-effective manner.

## Key Features

- **React Frontend**: A dynamic and responsive user interface built with React.
- **AWS Lambda**: Serverless backend functions to handle task operations (Create, Read, Update, Delete).
- **API Gateway**: Provides RESTful API endpoints for frontend-backend communication.
- **DynamoDB**: Fast and scalable NoSQL database to store and manage to-do tasks.
- **AWS S3 Deployment**: The frontend is deployed to AWS S3, ensuring seamless integration with backend services.

## Tech Stack

- **Frontend**: React.js
- **Backend**: AWS Lambda, API Gateway
- **Database**: AWS DynamoDB
- **Deployment**: AWS S3 for frontend hosting

## How It Works

1. **Frontend (React)**: Users interact with the frontend, adding, updating, and deleting tasks.
2. **API Gateway**: Requests from the frontend are routed through API Gateway to the appropriate AWS Lambda function.
3. **AWS Lambda**: Lambda functions handle CRUD operations, communicating with DynamoDB to store and retrieve task data.
4. **DynamoDB**: All tasks are stored in a DynamoDB table, optimized for fast and efficient queries.

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/AnkitDand/Serverless-ToDo-App.git
cd Serverless-ToDo-App
```

### 2. Frontend Setup (React)

Install dependencies and start the React app:

```bash
cd todo-app
npm install
npm start
```

### 3. Backend Setup (AWS Lambda)

1. Deploy AWS Lambda functions using the [AWS Console or AWS CLI](https://docs.aws.amazon.com/cli/latest/reference/lambda/create-function.html).
2. Set up API Gateway to route requests to the Lambda functions.

### 4. DynamoDB Setup

Create a DynamoDB table with the following schema:

- **Table Name**: TodoItems
- **Primary Key**: id (String)

### 5. Deploy Frontend to AWS S3

Use AWS S3 to host the React frontend. Make sure to set up the bucket for static website hosting. You can do this through the AWS Console or via the AWS CLI.

```bash
aws s3 sync ./todo-app/build/ s3://your-bucket-name/
```

## Project Link

Once the app is deployed, you will be able to access it via the link.
