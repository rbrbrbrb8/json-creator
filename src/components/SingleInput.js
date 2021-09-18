import { useState,useRef } from 'react';
import React from 'react';
import { Grid, TextField } from '@material-ui/core';
const inputsInfo = require('./inputsInfo');

function InputTableHeader(props) {
  const value= useRef('');
  return (
    <div>
      <Grid container spacing={1}>
        {inputsInfo.map((inputInfo) => (
          <Grid item key={inputInfo.key} xs>
            <h5>{inputInfo.key}</h5>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}


export default InputTableHeader;