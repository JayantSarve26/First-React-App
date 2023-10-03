import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./Views/Home/Home"
import About from "./Views/About/About"
import Contact from "./Views/Contact/Contact"


const root = ReactDOM.createRoot(document.getElementById('root'));

function App()
{
  const path = window.location.pathname;
  if(path === "/")
  {
    return <Home />;
  }
  else if(path === "/about")
  {
    return <About />;
  }
  else if(path === "/contact")
  {
    return <Contact />;
  }
  else
  {
    return <h1>404 error code</h1>;
  }
}
root.render(

  <>
 <App />
  </>
);

