import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { answer, questions } from '../data/question.tsx';

import '../css/Quiz.css'

export const Quiz = ({ setScore }: { setScore: (value: number) => void }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const navigate = useNavigate();

  const handleOptionChange = (questionIndex:number, option:String) => {
    setSelectedAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[questionIndex] = option;
      return newAnswers;
    });
  };

  const calculateScore = () => {
    if (selectedAnswers.includes(null)) {
      alert("請回答完所有問題後再進行提交");
      return;
    }
    let newScore = 0;
    selectedAnswers.forEach((selected, index) => {
      if (selected === answer[index]) {
        newScore += 10;
      }
    });

    setScore(newScore);
    if(newScore < 60)
      navigate('/failed');
    else
      navigate('/pass');

  };

  const resetQuiz = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
    window.scrollTo(0, 0);
  };
  return (
    <section className='quiz_q'>
      <form>
        <div className='container'>
          {questions.map((question, index) => (
            <div className="question" key={index}>
              <h3>{question.question}</h3>
              {question.options.map((option, optionIndex) => (
                <div className="option" key={optionIndex}>
                  <input type='radio' checked={selectedAnswers[index] === option}onChange={() => handleOptionChange(index, option)}/>
                  {option}
                </div>
              ))}
            </div>
          ))}
          <a className='btn' onClick={calculateScore}>送出</a>
          <a className='btn' onClick={resetQuiz}>重置選項</a>
        </div>
      </form>
    </section>
  );
}