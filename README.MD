Project Description:
Social Media API

This project showcases a robust API built using Node.js, Express.js, and MongoDB, simulating a social media platform's backend functionality. The API allows users to create profiles, follow other users, create posts with text, images, or videos, like and comment on posts, and more.

Features:
User Authentication: Secure user authentication and authorization using JSON Web Tokens (JWT).

User Profile Management: Users can create, update, and manage their profiles with details like username, email, bio, profile picture, etc.

Follow System: Functionality to follow/unfollow other users and manage follower/following relationships.

Post Creation and Interactions: Users can create posts containing text, images, or videos. Features for liking and commenting on posts are included.

Feed Generation: Personalized feeds for users based on the posts of people they follow.

Error Handling: Robust error handling and validation for requests.

Scalability: Designed with scalability in mind to handle a growing user base and interactions efficiently.

Technologies Used:
Node.js: Backend JavaScript runtime environment.

Express.js: Web application framework for Node.js to build robust APIs.

MongoDB: NoSQL database for storing user profiles, posts, and relationships.

Mongoose: MongoDB ODM for elegant modeling of application data.

JSON Web Tokens (JWT): For secure user authentication and authorization.

Usage:

1. Clone the repository.
2. Install dependencies using npm install.
3. Set up the following environment variables:
   NODE_ENV=development
   SECRET=<YOUR_SECRET>
   MONGODB_URL=mongodb+srv://<USERNAME>:<PASSWORD>...............
   MONGODB_USERNAME=<mongodb_atlas_username>
   MONGODB_PASSWORD=<mongodb_atlas_password>

4. Start the server using npm start.
5. Access the API endpoints using your preferred HTTP client (such as Postman).
