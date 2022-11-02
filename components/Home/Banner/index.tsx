import React, {useEffect, useState} from 'react'

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
    <img
    src = {  process.env.REACT_APP_API ? props?.logo?.data?.attributes?.url : `${'http://localhost:1337'}${props?.logo?.data?.attributes?.url}`}
    alt = {`${process.env.REACT_APP_API || 'http://localhost:1337'} ${props?.logo.data?.attributes?.caption}`}
    loading = 'lazy'
    />
    :
    <img
    src = {  process.env.REACT_APP_API ? props?.foto2?.data?.attributes?.url : `${'http://localhost:1337'}${props?.foto2?.data?.attributes?.url}`}
    alt = {`${process.env.REACT_APP_API || 'http://localhost:1337'}${props?.foto2.data?.attributes?.caption}`}
    className = 'foto2'
    loading = 'lazy'
    />
    }
    
    <style jsx>{`
      div{
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img{
        width: 100%;
        user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;
      }
    `}</style>
    </div>
  )
}

export default Banner