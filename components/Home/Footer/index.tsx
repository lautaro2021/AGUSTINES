import React from 'react';
import Link from 'next/link';

function Footer({props}:any) {
    const {bgColor, logo, redes, text, textColor} = props;
  return (
    <section>
      <div className="center-div">
        <img
          src={`${process.env.REACT_APP_API || "http://localhost:1337"}${
            logo?.data?.attributes?.url
          }`}
          alt={`${process.env.REACT_APP_API || "http://localhost:1337"}${
            logo?.data?.attributes?.caption
          }`}
          style={{ width: "150px" }}
        />

        <h5>{text}</h5>
        <div className="redes">
          {redes?.length &&
            redes.map((obj: any, i: number) => (
              <Link href={obj.linkUrl}>
                <img
                  src={`${
                    process.env.REACT_APP_API || "http://localhost:1337"
                  }${obj?.icon}`}
                  alt="redes"
                  style={{ width: "50px", zIndex: "500", margin: '0px 20px', cursor: 'pointer'}}
                  key = {i}
                />
              </Link>
            ))}
        </div>
      </div>
      <style jsx>{`
        section {
          background-color: #${bgColor};
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px 24px;
        }
        .center-div {
          max-width: 1330px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #${textColor};
        }
        .redes {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-redes-cont {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }
        @media screen and (max-width: 850px){
          .center-div{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          h5{
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}

export default Footer