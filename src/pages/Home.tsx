export const Home = () => {
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
                  <a className='btn' href='#/characters'>認識角色</a>
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