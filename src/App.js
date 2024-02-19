import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
  return (
    <div className="app">

      <Header />
      {/* App Body */}
      <div className='app_body'>
        <Sidebar />
        <Feed />
        
        {/* Feed */}
        {/* widgets */}
      </div>


    </div>
  );
}

export default App;



// import React from 'react'

// const App = () => {

//   const fetchData = () => {
//     fetch ('https://jsonplaceholder.typicode.com/photos')
//     .then ((response) => console.log(response)) 
//   }
//   return (
//     <div>
//       <button onClick={fetchData}>fetching Api</button>
//     </div>
//   )
// }

// export default App
