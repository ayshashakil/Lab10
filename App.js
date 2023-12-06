import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App Setup and Build Process</h1>
      <h2>Installation</h2>
      <p>(1) Install Node.js from https://nodejs.org/en.  Used Create React App to initialize the project</p>
      <p>(2) Install React framework using npm command: npm install create-react-app </p>
      <p>(3) Created a react project called lab10 using the npx command: npx create-react-app lab10 </p>
      <p>(4) Naviagted to the correct path in which the react project was in using the cd command </p>
      <p>(5) Launced the React server using the npm command: npm run start</p>
      
      <h2>Building the Web Page</h2>
      <p>(1) Opened the React app in Visual Studio Code in order to view the code</p>
      <p>(2) Openeed the src folder which contains the App.js and App.css files</p> 
      <p>(3) Modified the App.js and App.css to build this page and expalin the steps</p>
      
      <h2>Difficulties Encountered</h2>
      <p>Similar to the first problem, I faced issued with hosting. For this question, I was unsure which hosting platform I should use because I was looking for a platform that was quick and easy to deploy my code. I encountered some deployment failures because there was some errors in my code. To resolve this error, I did some navigating in Vercel and discovered the deployment logs. This provided me with specific error messages.</p>
    </div>
  );
}

export default App;

