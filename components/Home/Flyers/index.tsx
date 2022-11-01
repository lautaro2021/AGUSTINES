import React from 'react'

function Flyers({props}:any) {
    console.log(props);
  return (
    <section>
        <img
        src = {process.env.REACT_APP_API ? props?.foto1?.data?.attributes?.url : `${'http://localhost:1337'}${props?.foto1?.data?.attributes?.url}`}
        alt = {`${process.env.REACT_APP_API || 'http://localhost:1337'}${props.foto1?.data?.attributes?.caption}`}   
        ></img>
        <img
        src = {process.env.REACT_APP_API ? props?.foto2?.data?.attributes?.url : `${'http://localhost:1337'}${props?.foto2?.data?.attributes?.url}`}
        alt = {`${process.env.REACT_APP_API || 'http://localhost:1337'}${props.foto2?.data?.attributes?.caption}`}   
        ></img>
    <style jsx>{`
        section{
            width: 100vw;
            padding: 50px 24px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }
        img{
            width: 630px;
            margin: 15px 35px;
        }
        @media screen and (max-width: 770px){
            img{
                width: 100%;
            }
        }
    `}</style>
    </section>
  )
}

export default Flyers