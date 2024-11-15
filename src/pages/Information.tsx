import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Information = () => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();
    function btn_question(){
      if(checked)
        navigate('/quiz_question');
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