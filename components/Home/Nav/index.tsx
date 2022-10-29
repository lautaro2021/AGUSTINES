import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

function Nav({props}:any) {
    const {logo, options} = props;

    const [boolean, setBoolean] = useState(false);
    const scrollChange = () => {
        if(window.scrollY > 0) {
            setBoolean(true);
        }else {
            setBoolean(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollChange);
    }, [])

  return (
    <nav className = {boolean? 'active-nav' : ''}>
      <div>
        {logo && (
          <img
            alt={`${logo?.data?.attributes?.caption}`}
            src={`${process.env.REACT_APP_API || "http://localhost:1337"}${
              logo?.data?.attributes.url
            }`}
          />
        )}
        <div className = 'options-div'>
        {options?.length && 
            options.map((option:any) => (
                <h5>{option.title.toUpperCase()}</h5>
            )
            )
        }
        </div>
      </div>
      <style jsx>{`
        nav {
          width: 100vw;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          position: fixed;
          top: 2vh;
          font-weight: normal !important;
          z-index: 1000;
        }
        .active-nav{
          width: 100vw;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          top: 2vh;
          box-shadow: 2px 2px 5px #d3d3d3;
          background-color: white;
        }
        div {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        img{
            height: 80%;
        }
        .options-div{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 20%;
            width: 15%;
            margin-bottom: 15px;
        }
        h5{
          margin: 0px 20px;
          font-family: 'Helvetica', sans-serif;
          cursor: pointer;
        }
      `}
      </style>
    </nav>
  );
}

export default Nav