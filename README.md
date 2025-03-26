# CSC468_Project

Google Doc: https://docs.google.com/document/d/1pubuknmIWD9sUVgq7GyzFY1BmUddTtBC5pH4WGfDWdk/edit?usp=sharing

***TO RUN ON DOCKER
docker-compose up


*** add 'npm install mongodb' to the Node.js backend logic

here is the MongoDB connection code that we need to add to the index.js file of the backend,
(This will connect MongoDB to our Node.js backend)

******************************************************************************************************

from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

connection_string = "mongodb+srv://brookassa4:injera12*@cluster0.phu6j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(connection_string)

try:
    # The ismaster command is cheap and does not require auth
    client.admin.command('ismaster')
    print("Connected to MongoDB Atlas!")
except ConnectionFailure:
    print("Failed to connect to MongoDB Atlas.")

db = client.movie_recommendation

users_collection = db.users

user_data = {
    "userId": "12345",
    "username": "john_doe",
    "password": "hashed_password",
    "watchedMovies": [],
    "preferences": {}
}

insert_result = users_collection.insert_one(user_data)
print(f"Inserted document with ID: {insert_result.inserted_id}")


query = {"userId": "12345"}
user = users_collection.find_one(query)
print("Found user:", user)


update_query = {"userId": "12345"}
new_values = {"$set": {"watchedMovies": ["movie1", "movie2"]}}
update_result = users_collection.update_one(update_query, new_values)
print(f"Updated {update_result.modified_count} document(s).")


delete_query = {"userId": "12345"}
delete_result = users_collection.delete_one(delete_query)
print(f"Deleted {delete_result.deleted_count} document(s).")


client.close()

******************************************************************************************************

register a new user logic:

******************************************************************************************************

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  
  const hashedPassword = bcrypt.hashSync(password, 8);

  // Generate a unique user ID
  const userId = Math.random().toString(36).substring(2) + Date.now().toString(36);

  // Insert the user into the database
  const db = client.db('movie_recommendation');
  const usersCollection = db.collection('users');

  try {
    await usersCollection.insertOne({
      userId,
      username,
      password: hashedPassword,
      watchedMovies: [],
      preferences: {}
    });

    res.status(200).send('User registered successfully.');
  } catch (err) {
    res.status(500).send('Error registering user.');
  }
});
