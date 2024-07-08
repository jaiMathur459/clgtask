import React from 'react';

const Laravel = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-3xl font-bold mb-4 text-red-600">Laravel</h3>
        <div className="mb-4 p-4 bg-red-50 rounded-md shadow-md">
          <p className="mb-2">Laravel is a free and open-source PHP web application framework. Here's a breakdown of what that means:</p>
          <p className="mb-2">• Free and Open-Source: Anyone can use and modify Laravel's code for free. This makes it accessible to a large community of developers and fosters continuous improvement.</p>
          <p className="mb-2">• PHP Web Application Framework:</p>
          <p className="ml-4 mb-2">o PHP: Laravel is built on the PHP programming language. If you're new to web development, you'll need to have a basic understanding of PHP to effectively use Laravel.</p>
          <p className="ml-4">o Web Application Framework: Imagine Laravel as a pre-built toolbox with all the essential tools for web development. It provides a structured approach to building web applications, saving you time and effort by handling common development tasks.</p>
        </div>

        <div className="mb-4 p-4 bg-red-50 rounded-md shadow-md">
          <h5 className="text-xl font-semibold mb-2 text-red-600">Roadmap for Laravel</h5>
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">Phase 1: PHP Fundamentals</h5>
            <p className="mb-2">• Solid understanding of PHP is essential for Laravel. If you're new to PHP, start by building a strong foundation in its core concepts.</p>
          </div>
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">Phase 2: Diving into Laravel</h5>
            <p className="mb-2">• Official Laravel Documentation: The comprehensive guide to everything Laravel, from installation to advanced concepts.</p>
            <p>• Laravel Tutorials: Many platforms offer interactive tutorials to get you hands-on with Laravel development.</p>
          </div>
          <div className="mb-4">
            <h5 className="text-lg font-semibold mb-2">Phase 3: Building Laravel Applications</h5>
            <div className="ml-4 mb-2">
              <p className="mb-2">• Explore Laravel Features: Laravel offers a rich set of features like:</p>
              <p className="ml-4 mb-2">o Routing: Define application routes for handling user requests.</p>
              <p className="ml-4 mb-2">o Eloquent ORM: Interact with databases effortlessly.</p>
              <p className="ml-4 mb-2">o Authentication and Authorization: Secure your application with user login and access control.</p>
              <p className="ml-4 mb-2">o Blade Templating Engine: Create dynamic and reusable views for your application.</p>
              <p className="ml-4">o Artisan CLI: Manage various development tasks from the command line.</p>
            </div>
            <p className="mb-2">• Laravel Homestead: This official development environment simplifies setting up a local development environment with PHP, MySQL, and Nginx pre-configured.</p>
            <p className="mb-2">• Building a Sample Project: Put your newfound knowledge to practice by building a small Laravel application. Here are some project ideas:</p>
            <p className="ml-4 mb-2">o To-Do List App</p>
            <p className="ml-4 mb-2">o Blog with User Authentication</p>
            <p className="ml-4">o Simple E-commerce Platform</p>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-2">Phase 4: Enhance Your Skills</h5>
            <p className="mb-2">• Laravel Packages: Explore the vast ecosystem of Laravel packages that extend functionalities and features.</p>
            <p>• Testing with Laravel: Writing unit and integration tests ensures the quality and stability of your application.</p>
          </div>
        </div>

        <div className="bg-red-50 rounded-md shadow-md p-4">
          <h4 className="text-xl font-semibold mb-2 text-red-600">Top Industry Level Examples of Laravel</h4>
          <p className="mb-2">1. 9GAG</p>
          <p>2. MyRAnk</p>
        </div>
      </div>
    </div>
  );
};

export default Laravel;
