import { useState } from "react";
import { useNavigate } from "react-router-dom";

//@ts-ignore
export const Quiz = ({score, setScore}) => {
    const questions =[
      {
        question: "1.請問主角「吉伊卡哇」的設計原型為何？",
        options: ["小白熊", "博美犬", "倉鼠", "麻糬"],
      },
      {
        question: "2.請問團體「睡衣派對」中，以下何者不是四位團員所穿著的睡衣顏色？",
        options: ["黃色", "紅色", "紫色", "白色"],
      },
      {
        question: "3.請問吉伊卡哇所穿著的睡衣「顏色」為何？",
        options: ["淺藍色", "淺粉色", "淺紫色", "淺白色"],
      },
      {
        question: "4.請問吉伊卡哇及小八貓在餐廳拯救三隻暴躁星星後，所得到的報酬為何？",
        options: ["巨大布丁", "巨大章魚香腸", "巨大蛋包飯", "巨大乳酪蛋糕"],
      },
      {
        question: "5.請問以下誰的「除草證書」為最高等級？",
        options: ["吉伊", "小八貓", "烏薩奇", "妍希"],
      },
      {
        question: "6.請問吉伊卡哇的房子是什麼東西舉辦的抽獎抽中的？",
        options: ["超級美味的拉麵", "超級滑順的布丁", "超級可口的優格", "超級濃郁的奶酪"],
      },
      {
        question: "7.請問小八貓除了哪一區的草，因混有危險草而備受勞動鎧稱讚並酬勞增加？",
        options: ["B區", "D區", "E區", "F區"],
      },
      {
        question: "8.請問下列何者是小可愛常搭乘的交通工具？",
        options: ["曼波魚", "奇美拉", "巨大昆布", "腳踏車"],
      },
      {
        question: "9.請問小八貓經常念錯的拉麵正確名稱為？",
        options: ["風苗拉麵", "風畚拉麵", "風笛拉麵", "風奋拉麵"],
      },
      {
        question: "10.請問以下何者不是小可愛們的主要工作？",
        options: ["討伐", "拔草", "貼貼紙", "煮拉麵"],
      }]
      const answer = ['倉鼠', '黃色', '淺粉色', '巨大蛋包飯', '烏薩奇', '超級滑順的布丁', 'B區', '曼波魚', '風苗拉麵', '討伐'];
      const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
      const navigate = useNavigate();
  
      const handleOptionChange = (questionIndex:number, option:String) => {
        setSelectedAnswers((prevAnswers) => {
          const newAnswers = [...prevAnswers];
          newAnswers[questionIndex] = option;
          console.log(newAnswers);
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