'use client'

import React, { useState, useEffect } from "react";
import { CardSugerencias } from "./cardSugerencias";
import classes from './carrusel-Vista.module.css'
import { Box, IconButton } from "@mui/material";

const lista = [
  { id: 0, imgSrc: "https://firebasestorage.googleapis.com/v0/b/prueba-fire-dcce5.appspot.com/o/slayer1.png?alt=media&token=41b11801-dbcd-43b1-8022-4e4df8e7ac9c" },
  { id: 1, imgSrc: "https://firebasestorage.googleapis.com/v0/b/prueba-fire-dcce5.appspot.com/o/slayer2.png?alt=media&token=62b24fdc-7eb1-4b21-8799-463b5d2c69db" },
  {id: 2, imgSrc: "https://firebasestorage.googleapis.com/v0/b/prueba-fire-dcce5.appspot.com/o/YOUR%20BODY%20(1580%20x%20450%20px).svg?alt=media&token=895c65a9-710e-4c6c-83b0-bdb52201accc" },

];


const Contenedor = () => {
  const [elementoActivo, setElementoActivo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      moverImagenDerecha();
    }, 5000); // Cambia este valor según tu preferencia de intervalo
    return () => clearInterval(interval);
  }, [elementoActivo]);

  const moverImagenDerecha = () => {
    setElementoActivo((elementoActivo + 1) % lista.length);
  };

  const moverImagenIzquierda = () => {
    setElementoActivo((elementoActivo - 1 + lista.length) % lista.length);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div className={`${classes.btn} ${classes.leftBtn}`}>
        <IconButton onClick={moverImagenIzquierda} size="small">
          <Box />
        </IconButton>
      </div>
      <div className={`${classes.btn} ${classes.rightBtn}`}>
        <IconButton onClick={moverImagenDerecha} size="small">
          <Box style={{ transform: "rotate(180deg)" }} />
        </IconButton>
      </div>
      <div style={{ width: "100%", height: "100%" }}>
        {lista.map((elemento, index) => (
          <CardSugerencias
            key={elemento.id}
            data={
              <div>
                <img src={elemento.imgSrc} alt={`Imagen ${index}`} style={{ width: "100%", height: "auto" }} />
              </div>
            }
            activo={elementoActivo === index}
          />
        ))}
      </div>
    </div>
  );
};

export default Contenedor;
