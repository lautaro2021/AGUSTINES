import React, {useState, useEffect} from 'react'

export default function Hero({props}:any) {
  const {bgLogo, bgVideo} = props;
  const [anim, setAnim] = useState(false);

  const changeAnim = () => {
    if(window.scrollY > 800){
      setAnim(true)
    }else{
      setAnim(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeAnim);
  }, [anim])

  return (
    <section>
      <video
        src={process.env.REACT_APP_API ? bgVideo?.data?.attributes?.url : `${'http://localhost:1337'}${props?.logo?.data?.attributes?.url}`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <img
        src = {process.env.REACT_APP_API ? bgLogo?.data?.attributes?.url : `${'http://localhost:1337'}${bgLogo?.data?.attributes?.url}`}
        className = {anim ? 'no-active' : ''}
      />
    <style jsx>{`
      section{
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: none;
        z-index: -1;
      }
      section video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        z-index: 1000;
        background: none;
      }
      img{
        position: absolute;
        top: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        width: 600px
      }
      .no-active{
        display: none
      }
      @media screen and (max-width: 600px){
        img{
          width: 100%;
        }
      }
    `}</style>
    </section>
  )
}

