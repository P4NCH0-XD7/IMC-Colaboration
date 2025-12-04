import React from "react";
import classnames from "classnames";
import classes from './cardSugerencias.module.css'
import { Box } from "@mui/material";

export const CardSugerencias = (props) => {
  return (
    <Box
      className={classnames(
        props.activo ? classes.activo : classes.carrusel_elemento,
        props.anterior ? classes.anterior : "",
        props.siguiente ? classes.siguiente : ""
      )}
    >
      {props.data}
    </Box>
  );
};
