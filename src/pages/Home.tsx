import { videoProps, videos } from '../data/video';
import theme from '../assets/video/theme.mp4'

import '../css/Home.css'

export const Home = () => {
  function scrollTo(ElementId: string): void {
    const introSection = document.getElementById(ElementId);
    if(introSection != null)
      introSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className='background'>
      <section className='home'>
        <div className='container'>
          <div className='col-md-16'>
            <h1 className='display-1'>吉伊卡哇の小天地</h1>
            <a className='btn' onClick={() => scrollTo('intro')}>故事概要</a>
            <a className='btn' onClick={() => scrollTo('theme')}>主題曲</a>
            <a className='btn' onClick={() => scrollTo('recommend')}>影片推薦</a>
            <a className='btn' href='#/characters'>認識角色</a>
          </div>
        </div>
      </section>
      <section id='intro' className="intro">
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
      </section>
      <section id="theme" className="theme">
        <div className='container'>
          <div className='col-md-16'>
            <video src={ theme } {...videoProps}></video>
            <div className='text-container'>
              <h1>主題曲-睡衣派對之歌</h1>
              <p>以睡衣派對為主題</p>
              <p>使用快樂的節奏並搭配明快的旋律</p>
              <p>表達與朋友們共度快樂時光的羈絆</p>
              <p>讓人感受到快樂派對的氛圍</p>
              <p>並且把煩惱全都忘掉</p>
            </div>
          </div>
        </div>
      </section>
      <section id="recommend" className="recommend">
        <div className='container'>
          <h1>影片推薦</h1>
          <div className='col-md-16'>
          {videos.slice(0, 3).map((video) => (
            <div key={video.id} className="video-container">
              <div className="video">
                <video src={video.src} {...videoProps} />
              </div>
              <div className="title">
                <p>{video.title}</p>
              </div>
            </div>
          ))}
          </div>
          <div className='col-md-16'>
          {videos.slice(3, 6).map((video) => (
            <div key={video.id} className="video-container">
              <div className="video">
                <video src={video.src} {...videoProps} />
              </div>
              <div className="title">
                <p>{video.title}</p>
              </div>
            </div>
          ))}
          </div>
        </div>
        <div className='home-button'>
          <a className='btn' onClick={() => window.scroll(0, 0)}>回到頂部</a>
        </div>
      </section>
    </section>
  );
};