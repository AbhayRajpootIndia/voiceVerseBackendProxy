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

END-POINTS:

Certainly! Here's a condensed version of the documentation:

---

## API Documentation

### User Endpoints

1. **User Signup**
   - **Method:** POST
   - **Endpoint:** `/user/signup`
   - **Description:** Create a new user account.
2. **User Login**
   - **Method:** POST
   - **Endpoint:** `/user/login`
   - **Description:** Log in with existing credentials.
3. **Get User by ID**
   - **Method:** GET
   - **Endpoint:** `/user/:id`
   - **Description:** Fetch user details by ID.
4. **Get All Users**
   - **Method:** GET
   - **Endpoint:** `/user`
   - **Description:** Retrieve a list of all users.

### Post Endpoints

1. **Post Creation**

   - **Method:** POST
   - **Endpoint:** `/post`
   - **Description:** Create a new post.

2. **Post Deletion**

   - **Method:** DELETE
   - **Endpoint:** `/post`
   - **Description:** Delete a post by ID.

3. **Post Edit**

   - **Method:** PATCH
   - **Endpoint:** `/post`
   - **Description:** Edit a post by ID.

4. **Comment on Post**

   - **Method:** POST
   - **Endpoint:** `/post/comment`
   - **Description:** Add a comment to a post.

5. **Remove Comment from Post**

   - **Method:** PATCH
   - **Endpoint:** `/post/comment`
   - **Description:** Remove a comment from a post.

6. **Like Post**

   - **Method:** POST
   - **Endpoint:** `/post/like`
   - **Description:** Like a post.

7. **Unlike Post**

   - **Method:** PATCH
   - **Endpoint:** `/post/like`
   - **Description:** Unlike a post.

8. **Get Post by ID**

   - **Method:** GET
   - **Endpoint:** `/post/:id`
   - **Description:** Fetch a post by ID.

9. **Get All Posts**

   - **Method:** GET
   - **Endpoint:** `/post`
   - **Description:** Retrieve all posts.

10. **Get All Comments of a Post**

    - **Method:** GET
    - **Endpoint:** `/post/comment/:postId`
    - **Description:** Get all comments of a post.

11. **Get All Likes of a Post**
    - **Method:** GET
    - **Endpoint:** `/post/like/:postId`
    - **Description:** Get all likes of a post.

---

This concise documentation provides an overview of each endpoint's purpose and method. You might want to include additional details such as request/response formats or any necessary parameters for clarity.
