import Link from 'next/link';
import React, {useState} from 'react';
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io';
import separar from '../price';
import Image from 'next/image';

function Producto({props}:any) {
  const productInfo = `https://api.whatsapp.com/send?phone=3417487004&text=Hola, necesito mas informacion sobre el articulo ${props.title}`
  const {foto, color} = props;
  const colorArr = color?.split(' ')
  const [index, setIndex] = useState(0);

  function handleResta(){
    if(index > 0) return setIndex(index - 1);
    return setIndex(foto?.data.length - 1);
  }
  function handleSuma(){
    if(index < foto?.data.length - 1) return setIndex(index + 1);
    return setIndex(0);
  }

  return (
    <div className="main">
      {foto?.data?.map((obj: any, i: number) => {
        return (
          <div className={`img-cont ${i !== index ? "hidden" : ""}`} key = {i}>
            <IoIosArrowBack
              onClick={handleResta}
              style={{
                position: "absolute",
                top: "50%",
                left: "2%",
                cursor: "pointer",
                zIndex: "500",
              }}
            />
            <Image
              src={
                process.env.REACT_APP_API
                  ? obj?.attributes?.url
                  : `${"http://localhost:1337"}${obj?.attributes?.url}`
              }
              alt={`${process.env.REACT_APP_API || "http://localhost:1337"}${
                obj?.attributes?.caption
              }`}
              className={`${i !== index && "hidden"}`}
              key={i}
              layout='fill'
              objectFit='cover'
              placeholder='blur'
              blurDataURL={
                process.env.REACT_APP_API
                  ? obj?.attributes?.url
                  : `${"http://localhost:1337"}${obj?.attributes?.url}`
              }
            />
            <IoIosArrowForward
              onClick={handleSuma}
              style={{
                position: "absolute",
                top: "50%",
                right: "2%",
                cursor: "pointer",
                zIndex: "500",
              }}
            />
            <Link href={productInfo}>
              <button className="info-button">+ INFO</button>
            </Link>
          </div>
        );
      })
      }
      <div className="info-cont">
        <h5>{props.title}</h5>
        <h5 style={{ fontWeight: "bold" }}>{separar(props.price)}</h5>
        <div className="color-cont">
          {colorArr?.length &&
            colorArr.map((obj: string, i: number) => (
              <button
                style={{
                  borderRadius: "50%",
                  backgroundColor: `#${obj}`,
                  border: "2px solid white",
                  width: "20px",
                  height: "20px",
                  margin: "0px 3px 0px 0px",
                }}
                key={i}
              ></button>
            ))}
        </div>
      </div>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap");
        .main {
          width: 300px;
          height: 450px;
          box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.418);
        }
        .img-cont {
          width: 100%;
          height: 80%;
          position: relative;
          user-select: none;
          -moz-user-select: none;
          -khtml-user-select: none;
          -webkit-user-select: none;
          -o-user-select: none;
        }
        .info-button {
          position: absolute;
          top: 4%;
          left: 4%;
          background-color: white;
          font-weight: bold;
          font-family: "Inter", sans-serif;
          width: 60px;
          height: 35px;
          cursor: pointer;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 5px;
          transition: 0.2s;
          font-size: 12px;
        }
        .info-button:hover {
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.418);
        }
        h5 {
          font-family: "Inter", sans-serif;
          font-weight: normal;
          margin: 3px 0;
          font-size: 18px;
        }
        .hidden {
          display: none;
        }
        .color-cont {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .info-cont {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
          height: 20%;
          margin: 0;
          padding: 0;
          padding: 10px;
        }
        @media screen and (max-width: 1215px) and (min-width: 1000px) {
          .main {
            width: 100%;
          }
        }
        @media screen and (max-width: 850px) and (min-width: 651px) {
          .main {
            width: 100%;
          }
        }
        @media screen and (max-width: 600px) {
          .main {
            width: 100%;
            height: 500px;
          }
        }
      `}</style>
    </div>
  );
}

export default Producto