create a Spring Boot project using "Spring Initializr"

**Project Overview**
- Project: Maven Project
- Language: Java
- Spring Boot: 3.x.x (latest stable version)
- Dependencies: Spring Web, Spring Boot DevTools
  

**Project Overview**
High-Level System Design
Frontend: Vue.js with Vuex for state management, Bootstrap for the UI, and Sass for styling.
Backend: An Express server using GraphQL to handle API requests for linear optimization calculations.
Deployment: Vercel or Heroku for deployment, Firebase for authentication.
Testing: Use Jest for unit testing, Cypress for E2E testing.
Version Control: Use GitHub for managing code and collaboration.

- Frontend Framework: Vue.js (created Vue.js project using Vite)
- State Management: Vuex
- CSS Framework: Bootstrap
- CSS Preprocessor: Sass
- Build Tool: Vite
- Package Manager: npm
- API & Data Handling: GraphQL
- Version Control: GitHub
- IDE: Visual Studio Code (VSCode)
- Testing Tools: Jest and Cypress
- Deployment: Vercel or Heroku
- Authentication: Firebase Authentication
- Performance Optimization: Lighthouse

**npm Install**

# Install Vuex for state management
npm install vuex@next

# Install Bootstrap and Sass
npm install bootstrap sass

# Install Apollo Client and GraphQL
npm install @apollo/client graphql

# Install Firebase
npm install firebase

# Install Jest and Cypress for testing
npm install --save-dev jest cypress

# Optional: Install Vue Router if needed
npm install vue-router@next

# Install Vue Router 
npm install vue-router@next

**Main Functions**
1. 
Simplex LP Logic in Java (index.js)
- Create a service class in Java to implement the Simplex LP logic. 
- SimplexService performs the simplex algorithm
- SimplexResult: helper class to hold the result (optimal solution, slack variables, and the objective value).

**Running the program**
1. Run backend on vscode: node index.js, such that we have backend listening at http://localhost:3001
   
2. 
   (Method 1) Run cURL on Terminal to make a POST request on the    Terminal directly: type command with /api/calculate: 
    `
        curl -X POST http://localhost:3001/api/calculate \
        -H "Content-Type: application/json" \
        -d '{"A": [[2, 1], [1, 1], [1, 0]], "B": [100, 80, 40], "C": [3, 2]}'
    `
    If seeing messgae "Server is running. Use /api/calculate for calculations," use POST request to the /api/calculate endpoint.


   (Method 2) Make Post request using Postman: Send a POST request to the endpoint with required 
   In postman, set request method to POST, enter the generated URL: http://localhost:3001/api/calculate.
   Go to "Body" tab, select "raw" tab, choose "JSON":  
   `
   Enter JSON payload 
   `{
        "A": [[2, 1], [1, 1], [1, 0]],
        "B": [100, 80, 40],
        "C": [3, 2]
    }
   `
**Deployment of my Vue.js application using Vercel**

