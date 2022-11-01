import React from 'react'

function Etiqueta({props}:any) {
  const {id, title, description, logo} = props;
  return (
    <div key={id} className="main-div">
      <div className = 'img-cont'>
        <img
          src={process.env.REACT_APP_API ? props?.logo?.data?.attributes?.url : `${'http://localhost:1337'}${props?.logo?.data?.attributes?.url}`}
          alt={`${process.env.REACT_APP_API || "http://localhost:1337"}${
            logo?.data?.attributes?.caption
          }`}
        />
      </div>
      <h4>{title.toUpperCase()}</h4>
      <p>{description}</p>
      <style jsx>{`
        .main-div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 300px;
          height: 250px;
          text-align: center;
          margin: 0 35px;
        }
        .img-cont{
          width: 100%;
          height: 50%;
        }
        img {
          width: 50px;
          margin-top: 15%;
        }
        h4{
          margin-top: 15px;
        }
        p {
          height: 50%;
        }
      `}</style>
    </div>
  );
}

export default Etiqueta