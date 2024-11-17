import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { characters } from "../data/character";

import '../css/Characters.css'


export const Characters = () => {
  const navigate = useNavigate();
  function homePage(): void{
    window.scrollTo(0, 0);
    navigate('/')
  }
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
          {characters.map((character) => (
            <div key={character.id} className="col-md-4 text-center">
              <div className="outer">
                <div className="upper">
                  <img src={character.image} alt={character.name} />
                  <div className="innertext">
                    <h2>{character.name}</h2>
                  </div>
                </div>
                <div className="lower">
                  <h3>{character.description}</h3>
                </div>
              </div>
            </div>
          ))}
          </div>
          <a className='btn' onClick={homePage}>回首頁</a>
          <a className='btn' href='#/quiz_information'>進行測驗</a>
        </div>
      </section>
    );
  };