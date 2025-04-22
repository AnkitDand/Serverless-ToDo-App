exports.handler = async (event) => {
  console.log("Handler started");
  const AWS = require("aws-sdk");
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  try {
    console.log("Preparing to scan DynamoDB table 'TodoItems'");
    const params = {
      TableName: "TodoItems",
      Limit: 100, 
    };

    console.log("Starting DynamoDB scan");
    const data = await dynamodb.scan(params).promise();
    console.log(`Scan complete. Retrieved ${data.Items.length} items`);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify(data.Items),
    };
  } catch (err) {
    console.log("Error:", err);
    return {
      statusCode: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({
        message: "Failed to get todos",
        error: err.message,
      }),
    };
  }
};
