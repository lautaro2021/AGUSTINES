import {useState} from 'react';
import axios from 'axios';
import Head from 'next/head';
import Hero from '../components/Home/Hero';
import Nav from '../components/Home/Nav';
import MediosDePago from '../components/Home/MediosDePago';
import Flyers from '../components/Home/Flyers';
import Carrousel from '../components/Home/Carrousel';
import CarrouselDos from '../components/Home/CarrouselDos';
import Banner from '../components/Home/Banner';
import Grilla from '../components/Home/Grilla';
import Footer from '../components/Home/Footer';
import type { NextPage } from 'next';
import Link from 'next/link';
import {FiMoreHorizontal} from 'react-icons/fi';
import {AiOutlineInstagram, AiOutlineWhatsApp} from 'react-icons/ai';


const Home: NextPage = ({nav, home}: any) => {
  const [social, setSocial] = useState(false)
  const handleSocial = () => {
    setSocial(!social ? true : false);
  }
  let viewArr:any = [];
  process.env.REACT_APP_API = 'https://agustines.herokuapp.com'
  return (
    <div className="main">
      <Head>
        <title>Agustines</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
        <link rel="icon" href="/logo-mini.png" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <div className="descuentos">
        <h5>30% OFF EN LA SEGUNDA UNIDAD</h5>
      </div>
      <Nav props={nav} />
      <div className="redes-responsive" onClick={handleSocial}>
        <FiMoreHorizontal style={{ width: "40px", height: "40px" }} />
      </div>
      <div className={`redes-display ${!social ? "hidden" : ""}`}>
        <Link href="https://www.instagram.com/agustines.ok/">
          <AiOutlineInstagram style={{ width: "45px", height: "45px" }} />
        </Link>
        <Link href="https://api.whatsapp.com/send?phone=3417487004&text=Hola, necesito mas informacion sobre este articulo">
          <AiOutlineWhatsApp
            style={{ width: "45px", height: "45px", marginBottom: "20px" }}
          />
        </Link>
      </div>
      {home?.length &&
        home.map((section: any, i: number) => {
          switch (section.__component) {
            case "hero.hero":
              return <Hero props={section} />;
            case "medios-de-pago.medios-de-pago":
              return <MediosDePago props={section} />;
            case "flyers.flyers":
              return <Flyers props={section} />;
            case "carrousel.carrousel":
              return <Carrousel props={section} />;
            case "carrousel2.carrousel2":
              return <CarrouselDos props={section} />;
            case "banner.banner":
              return <Banner props={section} />;
            case "view-options.view-options":
              if (home[i + 1]?.__component === "view-options.view-options") {
                viewArr.push(section);
                return "";
              } else {
                return <Grilla props={[...viewArr, section]} />;
              }
            case "footer.footer":
              return <Footer props={section} />;
            default:
              return "";
          }
        })}
      <style jsx>{`
        .descuentos {
          background-color: black;
          width: 100vw;
          height: 2vh;
          color: white;
          position: fixed;
          top: 0;
          z-index: 1000;
        }
        h5 {
          font-weight: normal !important;
          text-align: center;
          font-size: 15px;
          margin-top: 3px;
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
        .view {
          max-width: 1330px;
          width: 100%;
          border-bottom: 1px solid black;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hidden {
          display: none !important;
        }
        @media screen and (max-width: 650px) {
          .redes-responsive {
            width: 60px;
            height: 60px;
            position: absolute;
            bottom: 30px;
            right: 20px;
            border-radius: 50%;
            background-color: white;
            position: fixed;
            z-index: 1000;
            box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .redes-display {
            poisition: absolute;
            position: fixed;
            bottom: 60px;
            right: 20px;
            width: 60px;
            height: 180px;
            border-radius: 30px 30px 0 0;
            box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.2);
            background-color: white;
            z-index: 900;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }
        }
        @media screen and (max-width: 400px) {
          h5 {
            width: 100%;
            text-align: center;
            font-size: 3vw;
            margin: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;

export async function getStaticProps(){
    const queryNav = 'api/navs?populate[nav][populate][0]=logo&populate[nav][populate][1]=options';
    const responseNav = await axios(`${queryNav}`);

    const queryHome = 'api/homes?populate[home][populate][0]=logo&populate[home][populate][1]=etiquetas.logo&populate[home][populate][2]=bgVideo&populate[home][populate][3]=bgLogo&populate[home][populate][4]=foto1&populate[home][populate][5]=foto2&populate[home][populate][6]=productos.foto&populate[home][populate][7]=productos.fotoHover&populate[home][populate][8]=carImg&populate[home][populate][9]=producto.foto&populate[home][populate][10]=producto.fotoHover';
    const responseHome = await axios(`${queryHome}`)
    return {
        props: {
            home: responseHome.data.data[0]?.attributes?.home,
            nav: responseNav.data.data[0]?.attributes?.nav
        }
    }
};