'use client'


import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import NavBar from "@/components/NavBar";
import PiePag from "@/components/PiePag";
import '@/app/User/User.css'
import Link from 'next/link';

import { useState } from 'react';

export default function UsuarioSesion() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [imc, setIMC] = useState(null);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
      const heightInMeters = height / 100;
      const imcValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setIMC(imcValue);
      let msg = '';
      if (imcValue < 18.5) {
        msg = 'Estás por debajo del peso ideal (bajo peso).';
      } else if (imcValue >= 18.5 && imcValue < 24.9) {
        msg = 'Tienes un peso saludable.';
      } else if (imcValue >= 25 && imcValue < 29.9) {
        msg = 'Estás en sobrepeso.';
      } else {
        msg = 'Tienes obesidad.';
      }
      setMessage(msg);
    }
  };

  return (
    <body>
      <NavBar />

      <main>
        <Box display='flex'>
          <div className="container1">
            <div className="sidebar">
              <Link href="/"><i className="home"></i> Inicio</Link>
              <Link href="#"><i className="fas fa-list"></i> Progreso</Link>
              <Link href="#"><i className="fas fa-credit-card"></i> Recomendaciones</Link>
              <Link href="#"><i className="fas fa-cogs"></i> Gestionar</Link>
            </div>
          </div>

          <div className='container2'>   
            <div className='AreaImc'>
              <h2>Calcula tu IMC</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                    Altura (cm):
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Peso (kg):
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <button type="submit">Calcular IMC</button>
              </form>
              {imc && (
                <div>
                  <h3>Tu IMC es: {imc}</h3>
                  <h4>{message}</h4>
                </div>
              )}
            </div>
          </div>
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
                    SANA ALIMENTACIÓN 
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Mejora tu IMC
                  </Typography>
                  <Typography variant="body2">
                    Síguenos
                    <br />
                    TU SALUD, NUESTRA RESPONSABILIDAD
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button href="/RFood" size="small">SABER MÁS</Button>
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
                    ENTRENA CUERPO Y ALMA
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Mejora tu IMC
                  </Typography>
                  <Typography variant="body2">
                    Síguenos
                    <br />
                    TU SALUD, NUESTRA RESPONSABILIDAD
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">SABER MÁS</Button>
                </CardActions>
              </Card>
            </div>
          </Container>
        </Box>

        <section>
          Aquí iría el contenido de la tercera sección
        </section>
      </main>
      <PiePag />
    </body>
  );
}
