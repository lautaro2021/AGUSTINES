import React, {useState, useEffect} from 'react';
import Producto from '../Producto';

function GrillaCalzado({props}:any) {
  const [actual, setActual] = useState('')
  const [flag, setFlag] = useState(false);
  let types:any = [];
  let filtered:any = [];

  if(props?.producto?.length){
    props.producto.forEach((prod:any) => {
      !types.includes(prod.type) && types.push(prod.type);
    })
  }
  if(props?.producto?.length){
    props.producto.forEach((prod:any) => {
      prod.type === actual && filtered.push(prod);
    })
  }

  const windowController = () => {
    if (window.innerWidth < 650) {
      setFlag(true);
    } else {
      setFlag(false);
    }
  };

  const handleActual = (obj:any) => {
    setActual(
      actual !== obj ? obj : ''
    )
  }

  useEffect(() => {
    if (window.innerWidth < 650) {
      setFlag(true);
    }
    window.addEventListener('resize', windowController);
  }, []);

  return (
    <section>
      {!flag 
      ?
      <div className='filters'>
      <h3>Filtrar por</h3>
      <div className='checkbox-filter'>
        {types?.length && types.map((obj:any, i:number)=>{
          return(
              <label onClick = {() => handleActual(obj)} className = {actual === obj ? 'active' : ''}>{obj}</label>
          )
        })}
      </div>
      </div>
      :
      <div className = 'responsive-filters'>
        {types?.length && types.map((obj:any, i:number)=>{
          return(
            <button onClick = {() => handleActual(obj)} className = {actual === obj ? 'active-btn' : ''}>{obj}</button>
          )
        })}
      </div>
      }
      <div className='productos'>
      {!filtered?.length && props.producto?.length && props.producto?.map((obj:any, i:number) => {
        return (
          <Producto key = {i} props = {obj}/>
        )
      })}
      {filtered?.length && filtered.map((obj:any, i:number) => {
        return (
          <Producto key = {i} props = {obj}/>
        )
      })}
      </div>
    <style jsx>{`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap');

      section{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        max-width: 1330px;
        width: 100%;
        padding: 50px 24px;
      }
      .productos{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 30px 15px;
        max-width: 1000px;
        width: 100%;
      }
      .filters{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-right: 24px;
      }
      .responsive-filters{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 60px;
        overflow-x: scroll;
        overflow-y: hidden;
      }
      .responsive-filters::-webkit-scrollbar {
      width: 0px;
      }

      .checkbox-filter{
        width: 100px;
        border-top: 1px solid black;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 15px 0px;
      }
      button{
        background-color: white;
        font-weight: bold;
        font-family: 'Inter', sans-serif;
        width: auto;
        height: 35px;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        transition: .2s;
        margin: 0px 10px;
      }
      .active-btn{
        background-color: white;
        font-weight: bold;
        font-family: 'Inter', sans-serif;
        width: auto;
        height: 35px;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 5px;
        transition: .2s;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.418);
      }
      h3{
        font-family: 'Helvetica', sans-serif;
        font-weight: normal;
      }
      label{
        margin: 0px 5px;
        cursor: pointer
      }
      label:hover{
        font-weight: bold;
      }
      .active{
        font-weight: bold;
      }
      @media screen and (max-width: 1000px){
        .productos{
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media screen and (max-width: 650px){
        section{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px 0px;
        }
        .productos{
          align-items: center;
          justify-items: center;
          grid-template-columns: repeat(1, 1fr);
          padding: 10px 0px;
        }
      }
    `}</style>
    </section>
  )
}

export default GrillaCalzado