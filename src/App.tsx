import { useNavigate, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';

const Home = () => {
  const scrollToIntro = () => {
    const introSection = document.getElementById('intro');
    if(introSection != null)
      introSection.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <section className='home'>
        <div className='p-5'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-md-16'>
                <h1 className='display-1'>吉伊卡哇の小天地</h1>
                <a className='btn' onClick={scrollToIntro} style={{cursor: 'pointer'}}>了解更多</a>
                <a className='btn' href='/chiikawa/characters'>認識角色</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='intro' className="intro">
      <div className='p-5'>
          <div className='container'>
            <div className='col-md-16'>
              <h1>故事概要</h1>
              <p>一群畫風獨特的「小可愛的日常」漫畫展開，並以簡單的多格漫畫，呈現不同的故事。</p>
              <p>這個世界有住宅和商店林立，存在著貨幣經濟和網際網路的存在。</p>
              <p>作為這個世界的居民，小可愛們主要從事「除草」和「討伐」，以維持生計。</p>
              <p>這些工作都是由一種叫做「盔甲人」的種族提供的。</p>
              <p>還存在著各種資格和相應的考試，根據資格的不同可以獲得更高的報酬，還可以喝酒。</p>
              <p>這個世界還有一些奇妙的生物，有些可能對生物造成危害。還有一些個體能夠進行對話。</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Characters = () => {
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'auto';
    };
  }, []);
  return (
    <section className='characters'>
      <div className='col-md-12 text-center'>
        <div className='row'>
          <div className='col-md-4 text-center'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/Chiikawa.jpg'></img>
                <div className='innertext'>
                  <h2>吉伊卡哇</h2>
                </div>
              </div>
              <div className='lower'>
                <h3>不太懂說話，膽小又愛哭，但是個心地善良又溫柔的小傢伙。</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/Hachiware.jpg'></img>
                <div className='innertext'>
                  <h2>小八貓</h2>
                </div>
              </div>
              <div className='lower'>
                <h3>又稱小八，個性樂觀、開朗，擅長社交，扮演著翻譯的角色。</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/rabbit.png'></img>
                <div className='innertext'>
                  <h2>兔兔</h2>
                </div>
              </div>
              <div className='lower'>
                <h3>充滿活力，看似神經大條卻很聰明，叫聲是「嗚啦」「呀哈」。</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/Momonga.jpg'></img>
                <div className='innertext'>
                  <h2>小桃鼠</h2>
                </div>
              </div>
              <div className='lower'>
                <h3>小小的身體、蓬鬆的尾巴，不斷裝可愛、裝可憐要求別人誇獎與哄牠，是個任性的角色。</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/KuriManju.jpg'></img>
                <div className='innertext'>
                  <h2>栗子饅頭</h2>
                </div>
              </div>
              <div className='lower'>
                <h3>吉伊卡哇的前輩。經常料理出美味的下酒菜，喝完啤酒會吐一口「哈~」，會請後輩吃美食。</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/Rakko.jpg'></img>
                <div className='innertext'>
                  <h2>海獺師傅</h2>
                </div>
              </div>
              <div className='lower'>
                <h3>討伐排行榜冠軍，被大家所崇拜的角色。大家看到他都會熱情的歡呼，用崇拜的眼神看著牠。</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/Shisa.jpg'></img>
                <div className='innertext'>
                  <h2>風獅爺</h2>
                </div>
              </div>
              <div className='lower'>
                <h3>聰明上進的角色，因為喜歡郎拉麵屋所以努力進到裡面打工，常出現與沖繩相關的食物和術語。</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/SleepParty.jpg'></img>
                <div className='innertext'>
                  <h2>睡衣派對</h2>
                </div>
              </div>
              <div className='lower'>
                <h3>身穿四種不同顏色連身睡衣載歌載舞的神秘生物，全身只是一個黑影、連樣貌都沒畫。</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/star.png'></img>
                <div className='innertext'>
                  <h2>流星</h2>
                </div>
              </div>
              <div className='lower'>
                <h3>小八貓與吉伊卡哇在餐廳救下差點被當作美食吃掉的星星們，被它們報答得到超大蛋包飯。</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-cener'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/Yoroi San3.jpg'></img>
                <div className='innertext'>
                  <h2>拉麵盔甲人</h2>
                </div>
              </div>
              <div className='lower'>
                <h3>郎拉麵屋的的老闆，他經營的郎拉麵店在當地非常受歡迎。</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/Yoroi San2.jpg'></img>
                <div className='innertext'>
                  <h2>手工盔甲人</h2>
                </div>
              </div>
              <div className='lower'>
              <h3>喜歡手作跟可愛的東西，製作過小背包、睡衣雨衣之類的作品。</h3>
              </div>
            </div>
          </div>
          <div className='col-md-4 text-center'>
            <div className='outer'>
              <div className='upper'>
                <img src='./src/img/Yoroi San1.jpg'></img>
                <div className='innertext'>
                  <h2>勞動盔甲人</h2>
                </div>
              </div>
              <div className='lower'>
              <h3>負責勞動管理，如刊登委託、幫助分辨討伐怪物、發送酬勞等。</h3>
              </div>
            </div>
          </div>
        </div>
        <a className='btn' href='/'>回首頁</a>
        <a className='btn' href='/chiikawa/quiz_information'>進行測驗</a>
      </div>
    </section>
  );
};

const Quiz_Information = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  function btn_question(){
    if(checked)
      navigate('/chiikawa/quiz_question');
    else
      alert("請先閱讀須知並勾選按鈕");
  }
  return (
    <section className='quiz_i'>
      <h1>吉伊卡哇小測驗</h1>
      <p>測驗範圍：涵蓋「吉伊卡哇」的基本知識、文化背景及小可愛在社會的意義。</p> 
      <p>問題類型：共10道選擇題，旨在評估你對於「吉伊卡哇」的理解程度。</p>
      <p>注意事項：測驗期間不得使用手機或其他電子設備查找答案。</p>
      <p>成績計算：每題10分，測驗成績將公布於測驗結束後。</p> 
      <div className="form-check">
        <input className="form-check-input" id="agree" type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)}/>
        <label className="form-check-label" htmlFor="agree">我已閱讀以上須知</label>
      </div>
      <div className='btn' onClick={btn_question}>開始測驗</div>
    </section>
  );
};
// @ts-ignore
const Quiz_Question = ({score, setScore}) => {
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
        navigate('/chiikawa/failed');
      else
        navigate('/chiikawa/pass');

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
          <a className='btn' href='/chiikawa/quiz_question'>重置選項</a>
        </div>
      </form>
    </section>
  );
}
// @ts-ignore
const Pass = ({score}) => {
  return(
    <section className='pass'>
      <div className='bg'>
        <div className='container'>
          <h2>您的得分為: {score}分</h2>
          <h3>嗚~~~~拉</h3>
          <div className='btn-container'>
            <a className='btn' href='/chiikawa/quiz_question'>再來一次</a>
            <a className='btn' href='/'>回到主頁</a>
          </div>
        </div>
      </div>
    </section>
  );
}
// @ts-ignore
const Failed = ({score}) => {
  return(
    <section className='failed'>
      <div className='bg'>
        <div className='container'>
          <h2>您的得分為: {score}分</h2>
          <h3>哥布林大軍朝你襲來</h3>
          <div className='btn-container'>
            <a className='btn' href='/chiikawa/quiz_question'>再來一次</a>
            <a className='btn' href='/'>回到主頁</a>
          </div>
        </div>
      </div>
    </section>
  );
};

function App() {

  const [score, setScore] = useState(0);


  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/chiikawa/" element={<Home />} />
        <Route path="/chiikawa/characters" element={<Characters />} />
        <Route path="/chiikawa/quiz_information" element={<Quiz_Information />} />
        <Route path="/chiikawa/quiz_question" element={<Quiz_Question score={score} setScore={setScore} />} />
        <Route path="/chiikawa/failed" element={<Failed score={score}/>} />
        <Route path="/chiikawa/pass" element={<Pass score={score}/>} />
      </Routes>
    </Router>
  );
}


export default App;