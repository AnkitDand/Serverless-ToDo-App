exports.handler = async (event) => {
  const AWS = require("aws-sdk");
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  try {
    const todoId = event.pathParameters.id;
    const requestBody = JSON.parse(event.body);
    const { title, description, completed } = requestBody;

    const getTodoParams = {
      TableName: "TodoItems",
      Key: { id: todoId },
    };

    const todoResult = await dynamodb.get(getTodoParams).promise();

    if (!todoResult.Item) {
      return {
        statusCode: 404,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ message: "Todo not found" }),
      };
    }

    const updateParams = {
      TableName: "TodoItems",
      Key: { id: todoId },
      UpdateExpression:
        "set #title = :title, description = :description, completed = :completed, updatedAt = :updatedAt",
      ExpressionAttributeNames: {
        "#title": "title",
      },
      ExpressionAttributeValues: {
        ":title": title || todoResult.Item.title,
        ":description":
          description !== undefined ? description : todoResult.Item.description,
        ":completed":
          completed !== undefined ? completed : todoResult.Item.completed,
        ":updatedAt": new Date().toISOString(),
      },
      ReturnValues: "ALL_NEW",
    };

    const updatedTodo = await dynamodb.update(updateParams).promise();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(updatedTodo.Attributes),
    };
  } catch (err) {
    console.log("Error:", err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ message: "Failed to update todo" }),
    };
  }
};
