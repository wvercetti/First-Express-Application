## First Express Application

## Description 
The goal of the assignment is to create a basic web application using **Node.js**, **Express**, **MVC architecture**, and **EJS** templating.  
The application displays my name, a header titled *“The MEAN Stack”*, and a list of MEAN stack definitions rendered dynamically from the controller.

---

## Requirements Completed
- Created a GitHub repository with a Node `.gitignore`
- Added instructor as collaborator
- Cloned repository and built project in Visual Studio Code
- Used Express framework with an MVC folder structure
- Implemented EJS as the front-end view engine
- Passed the following data from the controller to the EJS view:
  - Name  
  - Header Title ("The MEAN Stack")  
  - List of MEAN stack definitions (MongoDB, Express, Angular, Node.js)
- Each definition contains complete descriptions of at least 10 words
- Application runs locally with no errors at `http://localhost:3000`

---

## Technologies Used
- **Node.js**
- **Express.js**
- **EJS Template Engine**
- **MVC Architecture**
- **JavaScript**
- **Git / GitHub**

---

## Project Structure

project-folder/
├── app/
│ ├── controllers/
│ │ └── index.server.controller.js
│ ├── routes/
│ │ └── index.server.routes.js
│ └── views/
│ └── index.ejs
├── config/
│ └── express.js
├── public/
├── server.js
├── package.json
└── README.md


---

## How to Run the Application

1. Clone this repository:
git clone https://github.com/wvercetti/First-Node-Express-App.git

2. Install dependencies:
npm install

3. Start the server:
node server.js

4. Open a browser and go to:
http://localhost:3000

---

## Output Example

A sample of the expected webpage output:
first-express-app.docx
