'use client'

import styles from "./page.module.css";

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Carrusel from "@/components/Carrusel";
import NavBar from "@/components/NavBar";
import PiePag from "@/components/PiePag";


const Home = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
 
  const ScrollArrow = () => {
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  }

  return (
    <body>
    <NavBar/>
    <Carrusel/>
      <main>
        <Box>
          <div className="left-elements">
            <div className="left-text">
              <Typography variant="h1" component="h1">01</Typography>
            </div>
          </div>
        </Box>
        
        <Box>
          <Container>
            <Box  component="section" sx={{ p: 3 }}>

              <div className="container">
                
                <p className="intro-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..
                </p>
                <h1 className="main-title">
                  BIENVENIDO A <br />
                  IMC COLABORATION, <br />
                  VIVE LA MEJOR <br />
                  EXPERIENCIA DE <br />
                  NUTRICION Y <br />
                  <span className="highlight">DESCUBRE</span> <br />
                  TU VERDADERO <br />
                  SER
                </h1>
                <button className="btn">Conocenos</button>

                <div className="arrow">
                    <div onClick={ScrollArrow} style={styles.arrow}> <span>&#9660;</span>
                </div>
                 
                </div>
              </div>
           
            </Box>
          </Container>
        </Box>
        <Box>
      <Container className="targetasPrincipal" maxWidth="">
        <div className="AreaTargetas">
          <Card sx={{ margin: 2, minWidth: 275, maxWidth: 150 }}>
            <CardMedia
              component="img"
              height="140"
              image="/comida1.svg"
              alt=""
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                RECETAS FIT
              </Typography>
              <Typography variant="h5" component="div">
                SANA{bull}ALIMENTACION{bull}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Mejora tu IMC
              </Typography>
              <Typography variant="body2">
                Siguenos
                <br />
                TU SALUD NUESTRA RESPONSABILIDAD
              </Typography>
            </CardContent>
            <CardActions>
              <Button href="/RFood" size="small"> SABER MAS</Button>
            </CardActions>
          </Card>

          <Card sx={{ margin: 2, minWidth: 275, maxWidth: 150 }}>
            <CardMedia
              component="img"
              height="140"
              image="/rutinafit.svg"
              alt=""
            />
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                RUTINAS FIT
              </Typography>
              <Typography variant="h5" component="div">
                ENTRENA{bull}CUERPO{bull}Y ALMA
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Mejora tu IMC
              </Typography>
              <Typography variant="body2">
                Siguenos
                <br />
                TU SALUD NUESTRA RESPONSABILIDAD
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">SABER MAS</Button>
            </CardActions>
          </Card>
        </div>
      </Container>
    </Box>

        <section>
          Aquí iría el contenido de la tercera sección
        </section>
      </main>
     <PiePag/>

    </body>
  );
}

export default Home;
