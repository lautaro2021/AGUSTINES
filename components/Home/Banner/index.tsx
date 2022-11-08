import React, {useEffect, useState} from 'react';
import Image from 'next/image';
import s from '../styles/banner.module.css'

function Banner({props}:any) {
  const [flag, setFlag] = useState(false);

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
    <div>
    {!flag 
    ?
    <Image
    src = {  process.env.REACT_APP_API ? props?.logo?.data?.attributes?.url : `${'http://localhost:1337'}${props?.logo?.data?.attributes?.url}`}
    alt = {`${process.env.REACT_APP_API || 'http://localhost:1337'} ${props?.logo.data?.attributes?.caption}`}
    className={s.image}
    width = '2100px'
    height = '470px'
    />
    :
    <Image
    src = {  process.env.REACT_APP_API ? props?.foto2?.data?.attributes?.url : `${'http://localhost:1337'}${props?.foto2?.data?.attributes?.url}`}
    alt = {`${process.env.REACT_APP_API || 'http://localhost:1337'}${props?.foto2.data?.attributes?.caption}`}
    className={s.image}
    width = '750px'
    height = '750px'
    />
    }
    
    <style jsx>{`
      div{
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative
      }
    `}</style>
    </div>
  )
}

export default Banner