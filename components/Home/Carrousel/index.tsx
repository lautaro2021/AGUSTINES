import React, {useState, useEffect} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';

function Carrousel({props}:any) {
    const {carImg, productos} = props;
    const [index, setIndex] = useState(0);
    const [left, setLeft] = useState(false);
    const [flag, setFlag] = useState(false);

    function handleResta(){
      setLeft(true);
      if(index > 0) return setIndex(index - 1);
      return setIndex(productos.length - 1);
    }
    function handleSuma(){
      setLeft(false);
      if(index < productos.length - 1) return setIndex(index + 1);
      return setIndex(0);
    }

    const windowController = () => {
      if (window.innerWidth < 770) {
        setFlag(true);
      } else {
        setFlag(false);
      }
    };
  
    useEffect(() => {
      if (window.innerWidth < 770) {
        setFlag(true);
      }
      window.addEventListener('resize', windowController);
    }, []);

  return (
    <section>
      <div className = 'center-div'>
        <img
          src = {`${process.env.REACT_APP_API || 'http://localhost:1337'}${carImg?.data?.attributes?.url}`}
          alt = {`${process.env.REACT_APP_API || 'http://localhost:1337'}${carImg?.data?.attributes?.caption}`}
          className = 'carImg'
        />
        <div className = 'carrousel-cont'>
        <IoIosArrowBack onClick = {handleResta} style = {!flag ? {width: '30px', height: '30px', cursor: 'pointer'} : {position: 'absolute', top: '45%', left: '3%', width: '30px', height: '30px'}}/>
          {(index === 0 || index) &&
            productos?.map((obj: any, i:number) => {
              return (
                <div className = {`img-div ${i === index ? 'visible' : 'no-visible'}`}>
                  <img
                  src = {`${process.env.REACT_APP_API || 'http://localhost:1337'}${obj?.foto?.data?.attributes?.url}`}
                  alt = {`${process.env.REACT_APP_API || 'http://localhost:1337'}${obj?.foto?.data?.attributes?.caption}`}
                  className = {`image-slider ${i === index ? 'visible' : 'no-visible'}`}
                  />
                  <h4>{obj.title}</h4>
                </div>
              )
            })
          }
        <IoIosArrowForward onClick = {handleSuma} style = {!flag ? {width: '30px', height: '30px', cursor: 'pointer'} : {position: 'absolute', top: '45%', right: '3%', width: '30px', height: '30px'}}/>
        </div>
      </div>
    <style jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');
      section{
        width: 100vw;
        padding: 50px 24px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .center-div{
        max-width: 1330px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
      .carrousel-cont{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 24px;
      }
      .carImg{
        transition: .2s;
        cursor: pointer;
      }
      .carImg:hover{
        opacity: .8;
        z-index: 0;
      }
      .img-div{
        width: 750px;
        height: 650px;
        object-fit: cover;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        line-height: 0;
        overflow: hidden;
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
      }
      .image-slider{
        width: 100%;
        height: 95%;
        object-fit: cover;
        animation: ${left ? 'aparecer' : 'aparecerDerecha'} .3s ease;
      }
      .image-slider-hovered{
        width: 100%;
        height: 95%;
        object-fit: cover;
        animation: opacity .5s ease
      }
      h4{
        font-weight: normal !important;
        font-size: 20px;
        font-family: 'Inter', sans-serif;
        animation: ${left ? 'aparecer' : 'aparecerDerecha'} .3s ease;
      }
      .no-visible{
        display: none !important;
      }
      @keyframes aparecer {
          from {
            opacity: 0.5;
            margin-left: 100%
          }
          to {
            opacity: 1;
            margin-left: 0%;
          }
        }
      @keyframes aparecerDerecha {
          from {
            opacity: 0.5;
            margin-left: -100%
          }
          to {
            opacity: 1;
            margin-left: 0%;
          }
        }
      @media screen (max-width: 1335px){
        .center-div{
          width: 100%;
          height: 650px;
        }
        .carImg{
          width: 40%;
          height: 100%;
        }
        .carrousel-cont{
          width: 100%;
          height: 100%;
        }
        .img-div{
          width: 100%;
          height: 100%;
        }
      }
      @media screen (max-width: 1100px){
        .center-div{
          height: 550px;
        }
      }
      @media screen (max-width: 900px){
        .center-div{
          height: 450px;
        }
      }
      @media screen (max-width: 770px){
        section{
          padding: 0;
        }
        .center-div{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: auto;
        }
        .carrousel-cont{
          margin-left: 0;
          margin-top: 24px;
          position: relative;
        }
        .img-div{
          width: 100%;
          height: 600px;
          margin: 0px 15px;
        }
        .carImg{
          width: 100%;
        }
        .arrow-left{
          position: absolute;
          top: 50%;
          left: 4%;
        }
      }
    `}</style>
    </section>
  );
}

export default Carrousel;