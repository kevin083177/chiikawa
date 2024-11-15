import fail_audio from "../assets/audio/fail.mp3";

// @ts-ignore
export const Fail = ({score}) => {
    return(
      <section className='failed'>
        <div className='bg'>
          <div className='container'>
            <h2>您的得分為: {score}分</h2>
            <h3>哥布林大軍朝你襲來</h3>
            <audio src={ fail_audio } autoPlay></audio>
            <div className='btn-container'>
              <a className='btn' href='#/quiz_question'>再來一次</a>
              <a className='btn' href='#/'>回到主頁</a>
            </div>
          </div>
        </div>
      </section>
    );
  };