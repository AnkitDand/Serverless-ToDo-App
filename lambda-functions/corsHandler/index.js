exports.handler = async (event) => {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Content-Type,X-Amz-Date,Authorization,X-Api-Key",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
      "Access-Control-Allow-Credentials": true,
    },
    body: JSON.stringify({}),
  };
};
