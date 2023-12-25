## Project Description: Social Media API

### Overview

This project presents a comprehensive API crafted using Node.js, Express.js, and MongoDB, emulating the backend functionalities of a social media platform. The API empowers users to create profiles, establish connections by following others, generate diverse posts inclusive of text, images, or videos, interact through likes and comments, and more.

### Key Features

- **User Authentication:** Ensures secure authentication and authorization through JSON Web Tokens (JWT).
- **User Profile Management:** Facilitates profile creation, updates, and management, incorporating username, email, bio, profile picture, and more.
- **Follow System:** Enables users to follow/unfollow others, fostering follower/following relationships.
- **Post Creation and Interactions:** Empowers users to craft text, image, or video-based posts, encouraging interaction via likes and comments.
- **Feed Generation:** Tailors personalized feeds based on followed users' posts for enhanced user experience.
- **Error Handling:** Implements robust error handling and validation mechanisms for ensuring data integrity.
- **Scalability:** Architectured with scalability in focus to efficiently manage a burgeoning user base and interactions.

### Technologies Utilized

- **Node.js:** Utilized as the backend JavaScript runtime environment.
- **Express.js:** Employed as the web application framework for building resilient APIs.
- **MongoDB:** Leveraged as the NoSQL database for storing user profiles, posts, and relationships.
- **Mongoose:** Integrated as the MongoDB ODM for elegantly modeling application data.
- **JSON Web Tokens (JWT):** Integrated for ensuring secure user authentication and authorization.

---

### Usage:

To get started with this Social Media API project, follow these steps:

1. **Clone the Repository:**

   ```
   git clone <repository_url>
   ```

2. **Install Dependencies:**

   ```
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env` file in the root directory of the project and add the following environment variables:

   ```
   NODE_ENV=development
   SECRET=<YOUR_SECRET>
   MONGODB_URL=mongodb+srv://<USERNAME>:<PASSWORD>...............
   MONGODB_USERNAME=<mongodb_atlas_username>
   MONGODB_PASSWORD=<mongodb_atlas_password>
   ```

   Replace `<YOUR_SECRET>`, `<USERNAME>`, `<PASSWORD>`, `<mongodb_atlas_username>`, and `<mongodb_atlas_password>` with your actual values and MongoDB connection details.

4. **Start the Server:**

   ```
   npm start
   ```

5. **Access the API Endpoints:**
   Use your preferred HTTP client (such as Postman) to interact with the API endpoints. Refer to the provided API documentation for detailed endpoint descriptions and usage instructions.

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
