import React from 'react'

function Etiqueta({props}:any) {
  const {id, title, description, logo} = props;
  return (
    <div key={id} className="main-div">
        <img
          src={`${process.env.REACT_APP_API || "http://localhost:1337"}${
            logo?.data?.attributes?.url
          }`}
          alt={`${process.env.REACT_APP_API || "http://localhost:1337"}${
            logo?.data?.attributes?.caption
          }`}
        />
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
        img {
          width: 40px;
          margin-top: 15%;
        }
        p {
          height: 30%;
        }
      `}</style>
    </div>
  );
}

export default Etiqueta