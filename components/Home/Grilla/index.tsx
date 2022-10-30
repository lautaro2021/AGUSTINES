import React, {useState} from 'react';
import GrillaCalzado from './GrillaCalzado';

function Grilla({props}:any) {
    const [view, setView] = useState(props[0].title);
  return (
    <section>
      <div className="view">
        {props?.map((obj: any, i: number) => {
          return (
            <h2
              onClick={() => setView(props[i].title)}
              className={view === props[i].title ? "active" : ""}
              key = {i}
            >
              {obj.title.toUpperCase()}
            </h2>
          );
        })}
      </div>
      {props?.map((obj: any, i: number) => {
        if (obj.title === view) {
          return <GrillaCalzado props={obj} key={i} />;
        }
      })}
      <style jsx>{`
        section {
          width: 100vw;
          padding: 50px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .view {
          max-width: 1330px;
          width: 100%;
          border-bottom: 0.5px solid black;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        h2 {
          font-family: "Helvetica", sans-serif;
          font-weight: normal;
          font-size: 20px;
          margin: 15px;
          cursor: pointer;
        }
        h2:hover {
          border-bottom: 3px solid black;
        }
        .active {
          border-bottom: 3px solid black;
        }
      `}</style>
    </section>
  );
}

export default Grilla;