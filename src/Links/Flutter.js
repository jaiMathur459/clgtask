import React from 'react';

const Flutter = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
        <h3 className="text-3xl font-bold mb-4 text-blue-600">Flutter</h3>
        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <p className="mb-2">Flutter is an open-source framework created by Google for building native-looking mobile applications for iOS and Android using a single codebase. It offers several advantages:</p>
          <p className="mb-2">• Cross-Platform Development: Write code once and deploy it to both iOS and Android, saving development time and resources.</p>
          <p className="mb-2">• High-Performance UIs: Flutter utilizes its own rendering engine (Dart) to create smooth and visually appealing user interfaces with native-like performance.</p>
          <p className="mb-2">• Rich Widget Library: Flutter provides a comprehensive set of widgets for building various UI elements, reducing the need for custom development.</p>
          <p className="mb-2">• Hot Reload: The hot reload feature allows you to see changes in your code reflected in the running app almost instantly, accelerating the development process.</p>
          <p>• Dart Programming Language: Flutter uses Dart, a modern object-oriented language known for its ease of learning, readability, and features like garbage collection.</p>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h4 className="text-xl font-semibold mb-2 text-blue-600">Flutter Development Roadmap</h4>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h5 className="text-lg font-semibold mb-2">Phase 1: Setting Up Your Development Environment</h5>
          <p className="mb-2">1. Install Flutter SDK: Download and install the Flutter SDK following the official guide.</p>
          <p className="mb-2">2. Choose an IDE: Popular options include Android Studio (with Flutter plugin) or Visual Studio Code. Both offer features specifically designed for Flutter development.</p>
          <p>3. Understanding Dart: While not mandatory at the beginning, familiarizing yourself with Dart fundamentals will significantly enhance your development experience.</p>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h5 className="text-lg font-semibold mb-2">Phase 2: Learning Flutter Basics</h5>
          <p className="mb-2">1. Flutter Fundamentals: Grasp the core concepts of Flutter development, including widgets, state management, and rendering.</p>
          <p className="mb-2">2. Building a Simple UI: Practice by creating a basic user interface like a counter app or a to-do list. This will solidify your understanding of widgets and state management.</p>
          <p>3. Understanding Layouts: Learn how to structure your UI using layouts like Row, Column, Stack, and more.</p>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h5 className="text-lg font-semibold mb-2">Phase 3: Deepening Your Knowledge</h5>
          <p className="mb-2">1. Advanced UI Development: Explore widgets for various functionalities like buttons, text fields, forms, navigation drawers, and more.</p>
          <p className="mb-2">2. Data Handling and Networking: Learn how to fetch data from APIs and display it in your app. Explore options like HTTP and built-in networking libraries.</p>
          <p>3. State Management: Explore state management solutions like Provider or BLoC for handling complex app state.</p>
        </div>

        <div className="mb-4 p-4 bg-blue-50 rounded-md shadow-md">
          <h5 className="text-lg font-semibold mb-2">Phase 4: Building Real-World Applications</h5>
          <p className="mb-2">1. Choose a Project Idea: Select a project idea that interests you and challenges your skills. This could be a personal project, a contribution to open-source, or a freelance gig.</p>
          <p className="mb-2">2. Implement Features: Gradually build your app, focusing on functionalities, UI polish, and user experience.</p>
          <p>3. Testing and Deployment: Learn how to test your app for functionality and performance. Explore options for deploying your app to app stores.</p>
        </div>

        <div className="bg-blue-50 rounded-md shadow-md p-4">
          <h5 className="text-lg font-semibold mb-2 text-blue-600">Top Industry Level Examples of Flutter</h5>
          <p className="mb-2">1. Alibaba (e-commerce)</p>
          <p>2. Google Ads (mobile app)</p>
        </div>
      </div>
    </div>
  );
};

export default Flutter;
