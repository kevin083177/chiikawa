import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

import { Home } from './pages/Home.tsx';
import { Characters } from './pages/Characters.tsx';
import { Information } from './pages/Information.tsx';
import { Quiz } from './pages/Quiz.tsx';
import { Pass } from './pages/Pass.tsx';
import { Fail } from './pages/Fail.tsx';

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
      </Routes>
    </Router>
  );
}

export default App;