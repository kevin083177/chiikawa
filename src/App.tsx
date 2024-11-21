import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import { Home } from './pages/Home';
import { Characters } from './pages/Characters';
import { Information } from './pages/Information';
import { Quiz } from './pages/Quiz';
import { Pass } from './pages/Pass';
import { Fail } from './pages/Fail';
import { Test } from './pages/Test';

import './App.css'

function App() {

  const [score, setScore] = useState(0);
    
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/quiz_information" element={<Information />} />
          <Route path="/quiz_question" element={<Quiz setScore={setScore} />} />
          <Route path="/failed" element={<Fail score={score}/>} />
          <Route path="/pass" element={<Pass score={score}/>} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
  );
}

export default App;