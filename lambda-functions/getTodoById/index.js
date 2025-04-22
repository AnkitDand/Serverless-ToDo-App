exports.handler = async (event) => {
  const AWS = require("aws-sdk");
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  try {
    const todoId = event.pathParameters.id;

    const params = {
      TableName: "TodoItems",
      Key: { id: todoId },
    };

    const result = await dynamodb.get(params).promise();

    if (!result.Item) {
      return {
        statusCode: 404,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        body: JSON.stringify({ message: "Todo not found" }),
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(result.Item),
    };
  } catch (err) {
    console.log("Error:", err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ message: "Failed to get todo" }),
    };
  }
};
