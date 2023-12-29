// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           This is deployed on CLoudflare pages !!
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js
// App.js
import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import HomePage from './HomePage';
import SecondPage from './SecondPage';

const App = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage />} /> {/* Modified Route syntax */}
        <Route path="/SecondPage" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

export default App;

