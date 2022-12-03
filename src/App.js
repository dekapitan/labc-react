import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Lab10c
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div id="paragraph"><p>
        <h2>Setting Up</h2>
        I installed ReactJS by first installing Node.js on my computer. I then ran the command <code>npm i -g npx</code> which installs npx.
        <br></br><br></br>
        After that I opened a folder, and in terminal typed the following commands: <code>npx create-react-app my-app</code>, <code>cd my-app</code> and <code>npm start</code>.
        This let me create a new React app.
        <br></br><br></br>
        From there, I modified the App.js and App.css files using simple HTML and CSS. I kept the spinning React logo that came with the app by default.
        <br></br><br></br>
        Finally I uploaded the React app to Github Pages to host the site.
      </p></div>
      <div id="paragraph"><p>
        <h2>Difficulties</h2>
        At first, I did not realize that React apps were created using commands instead of simply creating a new file. I had to look at React tutorials to find out
        how to create an app.
        <br></br><br></br>
        My second difficulty was uploading the code to Github to make a page. After trying multiple YouTube videos and StackOverflow pages, I finally found a video that
        allowed me to deploy the app to Github Pages. To do this, I ran <code>git init</code>, <code>git add .</code> and used Github code to connect the app to my repository.
        Afterwards, I modified the package.json file and ran a deploy command which published the site.
        
      </p></div>
    </div>
  );
}

export default App;
