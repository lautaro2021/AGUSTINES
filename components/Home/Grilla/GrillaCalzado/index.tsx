import React, {useState, useEffect} from 'react';
import Producto from '../Producto';
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
import sizeController from '../../../sizeController';

function GrillaCalzado({props}:any) {
  const [actual, setActual] = useState('')
  const [side, setSide] = useState(false);
  const [buscar, setBuscar] = useState('')
  const [busqueda, setBusqueda] = useState<any>([]);
  const {width} = sizeController()

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

  const handleActual = (obj:any) => {
    setActual(
      actual !== obj ? obj : ''
    )
  }

  const handleSideTrue = () => {
    setSide(true)
  }
  const handleSideFalse = () => {
    setSide(false)
  }

  const handleBusqueda = (e:any) => {
    setBuscar(e.target.value);
  }

  useEffect(() => {
    props.producto.map((prod:any) => {
      if(prod.title.toLowerCase().includes(buscar.toLowerCase())){
        if(!busqueda.includes(prod)){
          setBusqueda([...busqueda, prod])
        }
      };
    })
    if(buscar === '') setBusqueda([])
  }, [buscar])

  return (
    <section>
      {width && width > 650
      ?
      <div className='filters'>
      <h3>Filtrar por</h3>
      <div className='checkbox-filter'>
        {types?.length && types.map((obj:any, i:number)=>{
          return(
              <label onClick = {() => handleActual(obj)} className = {actual === obj ? 'active' : ''} key = {i}>{obj}</label>
          )
        })}
      </div>
      </div>
      :
      <div className = 'responsive-filters'>
        <GiHamburgerMenu style={{width: '30px', height: '30px'}} onClick = {handleSideTrue}/>
      </div>
      }
      <div className='productos'>
      {!busqueda?.length && !filtered?.length ? props.producto?.map((obj:any, i:number) => <Producto key = {i} props = {obj}/>) : null}
      {!busqueda?.length && filtered?.length ? filtered.map((obj:any, i:number) => <Producto key = {i} props = {obj}/>) : null}
      {busqueda?.length ? busqueda.map((obj:any, i:number) => <Producto key = {i} props = {obj}/>) : null}
      </div>
      {side && 
      <div className = 'side'>
        <ImCross style={{width: '20px', height: '20px', position: 'absolute', top: '25px', right: '15px'}} onClick = {handleSideFalse}/>
        <div className = 'side-info'>
          <input placeholder='Buscar por nombre..' onChange={handleBusqueda} value = {buscar}></input>
          <h3 style = {{borderBottom: '1px solid black', marginTop: '15px'}}>Filtrar por</h3>
          {types?.length && types.map((obj:any, i:number)=>{
            return(
              <label onClick = {() => handleActual(obj)} className = {actual === obj ? 'active' : ''} key = {i}>{obj}</label>
            )
         })}
        </div>
      </div>
      }
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
        position: relative;
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
        width: 100%;
        display: flex;
        align-items: center;
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
      h3{
        font-family: 'Inter', sans-serif;
        font-weight: normal;
      }
      label{
        margin: 0px 5px;
        cursor: pointer
      }
      .active{
        margin: 0px 5px;
        cursor: pointer;
        font-weight: bold;
      }
      .side{
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.418);
        background-color: white;
        width: 70%;
        height: 500px;
        position: absolute;
        top: 0px;
        left: -24px;
        z-index: 600;
        animation: mover .5s ease;
        padding: 10px;
      }
      .side-info{
        margin-top: 60px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      input{
        font-family: 'Inter', sans-serif;
        width: 100%;
        font-size: 15px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        padding: 5px;
      }
      input:focus{
        outline: none;
      }
      @keyframes mover {
        from{
          left: -400px
        }
        to{
          left: -24px;
        }
      }
      @keyframes moverAtras{
        from{
          left: -24px
        }
        to{
          left: -400px
        }
      }
      @media screen and (min-width: 651px){
        label:hover{
          font-weight: bold;
        }
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