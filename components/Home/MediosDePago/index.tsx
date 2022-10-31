import React from 'react';
import Etiqueta from './Etiqueta';

function MediosDePago({props}:any) {
  const {etiquetas} = props;
  return (
    <section>
      <div>
      {etiquetas?.length && 
        etiquetas.map((description:any, i:number) => (
          <Etiqueta
            props = {description}
            key = {i}
          />
        ))
      }
      </div>
    <style jsx>{`
        section{
          width: 100vw;
          padding: 50px 24px;
          display: flex;
          flex-direction: center;
          align-items: center;
          justify-content: center;
        }
        div{
          display: flex;
          flex-direction: row;
          align-items:center;
          justify-content: center;
          max-width: 1200px;
          width: 100%;
          flex-wrap: wrap;
        }
    `}</style>
    </section>
  )
}

export default MediosDePago