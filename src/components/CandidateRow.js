import { useState,useRef,useEffect } from 'react';
import React from 'react';
import { Grid, makeStyles, TextField } from '@material-ui/core';
const inputsInfo = require('./inputsInfo');

const useStyles = makeStyles((theme) => ({
  textField:{
    width:100
  }
}))

function CandidateRow(props) {

  const classes = useStyles();
  const { indexInArr, test, setTest } = props;
  const rowObj = test[indexInArr];
  const [localTest,setLocalTest] = useState(test);

  useEffect(() => {
    console.log('change in test');
  },[test])

  const fixDate = date => {
    const extra = ':00+000:00.00'
    console.log(date + extra);
    return date;
  }

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    rowObj[name] = (name==='eventdatetime') ? fixDate(value) : value;
    test[indexInArr] = rowObj;
    console.log(value);
    setTest(test);
  }
  //value={test[indexInArr][inputInfo.key]}

  const printInfo= event =>{
    console.log(test[indexInArr][event.target.name])
    console.log(event.target.name);
  }

  return (
    <div>
      <Grid container spacing={1}>
        {inputsInfo.map((inputInfo) => (
          <Grid item container direction='column' alignItems='center' key={inputInfo.key} xs>
            {indexInArr === 0 ? <h5>{inputInfo.displayName}</h5> : ''}
            <TextField type={inputInfo.type} name={inputInfo.key}  onChange={handleChange} value={test[indexInArr][inputInfo.key]} className={inputInfo.isDateTime ? classes.textField : ''}></TextField>
            <button name={inputInfo.key} onClick={printInfo}>print</button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}


export default CandidateRow;