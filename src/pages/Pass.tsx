// @ts-ignore
export const Pass = ({score}) => {
    return(
      <section className='pass'>
        <div className='bg'>
          <div className='container'>
            <h2>您的得分為: {score}分</h2>
            <h3>呀~~~~哈</h3>
            <div className='btn-container'>
              <a className='btn' href='#/quiz_question'>再來一次</a>
              <a className='btn' href='#/'>回到主頁</a>
            </div>
          </div>
        </div>
      </section>
    );
  }