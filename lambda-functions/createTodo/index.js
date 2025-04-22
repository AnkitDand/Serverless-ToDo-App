exports.handler = async (event) => {
  const AWS = require("aws-sdk");
  const { v4: uuidv4 } = require("uuid");
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  try {
    const requestBody = JSON.parse(event.body);
    const { title, description = "", completed = false } = requestBody;

    if (!title) {
      return {
        statusCode: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ message: "Title is required" }),
      };
    }

    const todo = {
      id: uuidv4(),
      title,
      description,
      completed,
      createdAt: new Date().toISOString(),
    };

    await dynamodb
      .put({
        TableName: "TodoItems",
        Item: todo,
      })
      .promise();

    return {
      statusCode: 201,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(todo),
    };
  } catch (err) {
    console.log("Error:", err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ message: "Failed to create todo" }),
    };
  }
};
