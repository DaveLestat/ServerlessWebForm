const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const { name, bussines, industry, state } = JSON.parse(event.body);

  const params = {
    TableName: 'my-table',
    Item: {
      name: name,
      bussines: bussines,
      industry: industry,
      state: state
    }
  };

  try {
    await dynamoDB.put(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify('Data added to DynamoDB table'),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify('Error adding data to DynamoDB table'),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  }
};