# Project In

## Approach to My Project Idea

### 1. Define Requirements and Features

Identify the core features for the platform to have:
- User authentication
- Project submission
- Searching/filtering by tags
- Commenting
- Liking
- Messaging system for collaboration

Consider the user experience (UX) and user interface (UI) design to ensure your platform is intuitive and easy to navigate.

### 2. Choose the Right Technology Stack

Select appropriate technologies for:
- Front-end development -> Next.js 
- Back-end development (Node.js, Django, Flask, etc.) -> still deciding
- Database (MySQL, PostgreSQL, MongoDB, etc.) -> still deciding, probably MongoDB, maybe AWS Ec2 instance?

Utilize libraries or frameworks that support user authentication and authorization (e.g., Passport.js for Node.js).

### 3. Database Design

Design database schema to store:
- User information
- Project ideas
- Tags
- Comments
- Likes

Consider using a relational database for structured data and scalability.

### 4. User Authentication

Implement a secure user authentication system using technologies like:
- JWT (JSON Web Tokens)
- OAuth

Allow users to:
- Sign up
- Log in
- Log out
- Reset passwords securely

### 5. Project Submission

Create a form or interface for users to submit their project ideas.
Include fields for:
- Project title
- Description
- Programming languages
- Frameworks
- Tags

Validate user input to ensure data integrity.

### 6. Tagging System

Implement a tagging system where users can add tags to their project ideas.
Predefine a set of popular programming languages and frameworks as tags.
Allow users to add custom tags if necessary.

### 7. Search and Filtering

Develop a search feature that allows users to search for project ideas based on:
- Tags
- Titles
- Descriptions

Implement filtering options based on programming languages or frameworks.
Utilize indexing and search optimization techniques for efficient searching.

### 8. Community Interaction Features

Allow users to:
- Comment on project ideas
- Ask questions
- Provide feedback

Implement a liking or upvoting system to highlight popular or trending project ideas.
Consider adding features for users to follow other users and receive updates on their activities.

### 9. Responsive Design and Testing

Ensure platform is responsive and works well on various devices (desktops, tablets, smartphones).
Conduct thorough testing to identify and fix any bugs or usability issues.

## Deployment

- Clone repository:
```bash
git clone https://github.com/m0rniac/reactjs-blogsite
```
```bash
cd reactjs-blogsite/
```

- Install dependencies:
```bash
npm install
```

.
- Run project (for testing):
```bash
npm run dev
```
or
- Build project (for production):
```bash
npm run build
```

.
## About 'BUILD'

The project uses the **13.4.4** version of NextJS, which in production generates the `.next` folder by default (without `index.html` file).

In some cases it could complicate the deploy, to change the build mode and generate a Static Project (with `index.html` file) you must uncheck ***"output: 'export'"*** in the `next.config.js` file like so:


```javascript
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
}
```


This will create an `out` folder with the file "index.html" just like a ReactJS build. It should be mentioned that in some cases this modification could affect some functionalities of the project

### More info:
- [NextJS: Static Export](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)
- [NextJS: Static Site Generation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)
- [NextJS: Static & Dynamic Rendering](https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic-rendering)

