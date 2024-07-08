import React from 'react';

const Pern = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-3xl font-bold mb-4 text-blue-600">PERN</h3>
        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <p className="mb-2">The PERN stack is another option for building full-stack web applications, alongside popular choices like MERN (MongoDB, Express.js, React, Node.js) and MEAN (MongoDB, Express.js, Angular, Node.js). Here's a breakdown of the PERN stack:</p>
          <p className="mb-2">• P - PostgreSQL: An object-relational database management system (ORDBMS) known for its stability, reliability, and robust features. It offers both SQL (Structured Query Language) capabilities for familiar data querying and manipulation, as well as NoSQL-like flexibility for handling JSON data types.</p>
          <p className="mb-2">• E - Express.js: A web framework built on Node.js that simplifies building web applications and APIs. It provides features for routing, middleware, request handling, and response generation.</p>
          <p className="mb-2">• R - React.js: A JavaScript library for building dynamic user interfaces (UI) with a focus on component-based development. It allows you to create reusable UI components and manage their state effectively.</p>
          <p className="mb-2">• N - Node.js: A JavaScript runtime environment that allows you to execute JavaScript code outside of a web browser. This enables server-side development for building web application logic and APIs.</p>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h5 className="text-xl font-semibold mb-2 text-blue-600">PERN Stack Development Roadmap:</h5>
          <p className="mb-2">Charting Your Course</p>
          <p>The PERN stack (PostgreSQL, Express.js, React.js, Node.js) offers a compelling alternative for building full-stack web applications. If you're aiming to become a PERN stack developer, here's a roadmap to guide your learning journey:</p>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h5 className="text-lg font-semibold mb-2 text-blue-600">Phase 1: Foundational Knowledge</h5>
          <p className="mb-2">• HTML & CSS: Before diving into JavaScript frameworks, establish a strong understanding of HTML for web page structure and CSS for styling. This creates the foundation for building visually appealing user interfaces.</p>
          <p className="mb-2">• JavaScript Fundamentals: Grasp core JavaScript concepts like variables, data types, operators, functions, control flow, and DOM manipulation. This forms the backbone for building interactive web applications.</p>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h5 className="text-lg font-semibold mb-2 text-blue-600">Phase 2: Front-End Development with React</h5>
          <p className="mb-2">• Learn React Basics: Understand the core principles of React, including components, props, state, and JSX (JavaScript XML). Explore how to create reusable UI components and manage component state.</p>
          <p className="mb-2">• Practice Building React Components: Apply your newfound knowledge by building simple React applications. Experiment with different components, props, and state management techniques.</p>
          <p className="mb-2">• Routing and User Authentication: Learn how to implement routing in React applications to handle navigation between different views. Explore basic user authentication concepts like login and logout functionality.</p>
          <p className="mb-2">• React Ecosystem Libraries: Delve into popular React ecosystem libraries like Redux (state management), Material-UI (components), and React Router (routing). These libraries enhance your development experience and provide pre-built components and functionalities.</p>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h5 className="text-lg font-semibold mb-2 text-blue-600">Phase 3: Back-End Development with Node.js and Express</h5>
          <p className="mb-2">• Node.js Introduction: Grasp the fundamentals of Node.js, including its asynchronous nature and event-driven architecture. Understand how Node.js enables server-side JavaScript execution.</p>
          <p className="mb-2">• Building with Express: Explore the Express.js framework for creating web applications and APIs on top of Node.js. Learn about routing, middleware, request handling, and response generation.</p>
          <p className="mb-2">• Connecting to PostgreSQL: Learn how to connect your Node.js backend to a PostgreSQL database using libraries like pg or pg-promise. Explore querying data using SQL and performing CRUD (Create, Read, Update, Delete) operations.</p>
          <p className="mb-2">• Building RESTful APIs: Understand the principles of RESTful APIs and how to design and build APIs using Express and PostgreSQL. Focus on creating well-structured API endpoints for data access and manipulation.</p>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h5 className="text-lg font-semibold mb-2 text-blue-600">Phase 4: Data Modeling with PostgreSQL</h5>
          <p className="mb-2">• SQL Fundamentals: Learn the basics of SQL (Structured Query Language) for querying and manipulating data in relational databases like PostgreSQL. Understand concepts like tables, columns, data types, and JOIN operations.</p>
          <p className="mb-2">• PostgreSQL Features: Explore advanced PostgreSQL features like user management, access control, and data integrity constraints (foreign keys, primary keys).</p>
          <p className="mb-2">• Schema Design: Grasp the importance of designing efficient and scalable database schemas in PostgreSQL to optimize data storage and retrieval.</p>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h5 className="text-lg font-semibold mb-2 text-blue-600">Phase 5: Deployment and Security</h5>
          <p className="mb-2">• Deployment Options: Explore different deployment options for your PERN stack application. Consider platforms like Heroku, AWS, or Google Cloud Platform for hosting your application.</p>
          <p className="mb-2">• Security Best Practices: Learn about security best practices for PERN applications. This includes user authentication and authorization, data validation and sanitization, and protection against common web vulnerabilities.</p>
          <p className="mb-2">• PostgreSQL Security: Focus on securing your PostgreSQL database by implementing user authentication, access control, and regular backups.</p>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h5 className="text-lg font-semibold mb-2 text-blue-600">Phase 6: Continuous Learning and Improvement</h5>
          <p className="mb-2">• Front-End Advancements: Deepen your understanding of React by exploring advanced topics like context API, hooks, and server-side rendering. Consider learning a CSS preprocessor like Sass for enhanced styling capabilities.</p>
          <p className="mb-2">• Back-End Enhancements: Learn about more robust authentication and authorization techniques like JWT (JSON Web Token). Explore PostgreSQL features like stored procedures and triggers for complex data manipulation tasks.</p>
          <p className="mb-2">• Full-Stack Integration: Focus on integrating the front-end (React) and back-end (Node.js/Express) seamlessly. Practice fetching data from your Node.js API using React and manipulating the UI based on the retrieved data.</p>
          <p className="mb-2">• Stay Updated: The web development landscape is constantly evolving. Keep yourself updated with the latest advancements in the PERN stack by following industry blogs, attending meetups, and participating in online communities.</p>
        </div>
      </div>
    </div>
  );
};

export default Pern;
