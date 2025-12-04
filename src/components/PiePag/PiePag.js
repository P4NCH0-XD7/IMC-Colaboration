'use cliente'


import '@/components/PiePag/PiePag.css'
import Box from "@mui/material/Box";
import Icon from '@mui/material/Icon';
import Link from 'next/link'
import Image from "next/image";
import { Container, Tag } from 'reactstrap';
import { Typography } from '@mui/material';

export default function piePag() {
  return (


    <footer className="footer">
      <div className="icon-footer">

        <img src="logoEnblanco.png" width={250} height={250} alt="Icono" className="footer-icon"></img>

      </div>
      <div className="containerFooter">
        <div className="text-column">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="#sobre-nosotros">Sobre Nosotros</Link></li>
            <li><Link href="#servicios">Servicios</Link></li>
            <li><Link href="#contacto">Contacto</Link></li>
          </ul>
        </div>
        <div className="text-column">
          <h4>Contacto</h4>
          <p>Dirección: vereda San Antoni, Mocoa, Putumayo</p>
          <p>Teléfono: (+57) 323 2310 187</p>
          <p>Email: imcColaboration@gmail.com</p>
        </div>
        <div className="text-column">
          <h4>Síguenos</h4>
          <p>
            <img src='facebook.png' height={25} width={25} ></img> <a href="https://www.facebook.com" target="_blank"> Facebook</a>
          </p>
          <p>
          <img src='instagram.png' height={25} width={25} ></img>  <a icon="/instagram.png" target="_blank">Instagram</a>
          </p>

          <p>
          <img src='Xs.png' height={25} width={25}  ></img>  <a icon="/Xs" target="_blank">Twitter</a>
          </p>




        </div>

      </div>
    </footer>


  )

}