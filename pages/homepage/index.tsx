import {useState} from 'react';
import axios from 'axios';
import Head from 'next/head';
import Hero from '../../components/Home/Hero';
import Nav from '../../components/Home/Nav';
import MediosDePago from '../../components/Home/MediosDePago';
import Flyers from '../../components/Home/Flyers';
import Carrousel from '../../components/Home/Carrousel';
import CarrouselDos from '../../components/Home/CarrouselDos';
import Banner from '../../components/Home/Banner';
import Grilla from '../../components/Home/Grilla';
import Footer from '../../components/Home/Footer';

export default function HomePage({nav, home}: any) {
  let viewArr:any = [];
  return (
    <div className = 'main'>
      <Head>
        <title>Agustines</title>
      </Head>
      <div className = 'descuentos'>
        <h5>30% OFF EN LA SEGUNDA UNIDAD - ENVIOS GRATIS DESDE $15000</h5>
      </div>
      <Nav props={nav} />
      {home?.length &&
        home.map((section: any, i:number) => {
          switch (section.__component) {
            case "hero.hero":
              return <Hero props={section} />
            case "medios-de-pago.medios-de-pago":
              return <MediosDePago props = {section}/>
            case "flyers.flyers":
              return <Flyers props = {section}/>
            case "carrousel.carrousel":
              return <Carrousel props = {section}/>
            case "carrousel2.carrousel2":
              return <CarrouselDos props = {section}/>
            case "banner.banner":
              return <Banner props = {section}/>
            case "view-options.view-options":
              if(home[i + 1]?.__component === 'view-options.view-options'){
                viewArr.push(section);
                return '';
              }else{
                return <Grilla props = {[...viewArr, section]}/>
              }
            case "footer.footer":
              return <Footer props = {section}/>
            default:
              return "";
          }
        })}
      <style jsx>{`
        .descuentos{
            background-color: black;
            width: 100vw;
            height: 2vh;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            color: white;
            position: fixed;
            top: 0;
            z-index: 1000;
        }
        h5{
          font-weight: normal !important;
        }
        .main {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          margin: 0;
          padding: 0;
          background: none;
          border: none;
        }
        .view{
            max-width: 1330px;
            width: 100%;
            border-bottom: 1px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        @media screen and (max-width: 400px){
          h5{
            width: 100%;
            text-align: center;
            font-size: 3vw;
          }
        }
      `}</style>
    </div>
  );
}

export async function getStaticProps(){
    const queryNav = 'http://localhost:1337/api/navs?populate[nav][populate][0]=logo&populate[nav][populate][1]=options';
    const responseNav = await axios(`${queryNav}`);

    const queryHome = 'api/homes?populate[home][populate][0]=logo&populate[home][populate][1]=etiquetas.logo&populate[home][populate][2]=bgVideo&populate[home][populate][3]=bgLogo&populate[home][populate][4]=foto1&populate[home][populate][5]=foto2&populate[home][populate][6]=productos.foto&populate[home][populate][7]=productos.fotoHover&populate[home][populate][8]=carImg&populate[home][populate][9]=producto.foto&populate[home][populate][10]=producto.fotoHover';
    const responseHome = await axios(`${queryHome}`)
    return {
        props: {
            home: responseHome.data.data[0].attributes.home,
            nav: responseNav.data.data[0].attributes.nav
        }
    }
};