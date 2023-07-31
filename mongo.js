const { MongoClient } = require('mongodb');

const uri = '<DB_URL>';
const client = new MongoClient(uri);

client.connect((err) => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected successfully to MongoDB');

  // Use the database as needed (e.g., inserting, updating, querying data)
  const db = client.db('<DB_NAME>');

  // Example: Inserting data
  const collection = db.collection('my_collection');
  collection.insertOne({ name: 'John Doe', age: 30 }, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    console.log('Data inserted successfully');
  });
});
