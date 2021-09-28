import { useState, useEffect, useContext } from 'react';
import React from 'react';
import { Grid, makeStyles, MenuItem, TextField } from '@material-ui/core';
import { useEvents, useChangeEventDetails } from '../context/EventsContext';
import {DeleteForever} from '@material-ui/icons'
const inputsInfo = require('../info/inputsInfo');

const useStyles = makeStyles((theme) => ({
  textField: {
    width: 150
  },
  rowContainer: {
    marginBottom:20
  }
}))

function CandidateRow(props) {
  const classes = useStyles();
  const { indexInArr } = props;
  const events = useEvents();
  const localEvents = [...events];
  const currentEvent = events[indexInArr];
  const setEvents = useChangeEventDetails();

  const fixDate = date => {
    const extra = ':00+000:00.00'
    console.log(date + extra);
    return date + extra;
  }

  const fixValue = (value, name) => {
    console.log(name);
    if (name === 'eventdatetime') return fixDate(value);
    if (name === 'pnumber' || name === 'subjectcode' || name === 'candidatephone') return Number(value);
    return value;
  }

  const handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    currentEvent[name] = fixValue(value, name);
    localEvents[indexInArr] = currentEvent;
    setEvents(localEvents);
  }

  const genderOptions = [
    {
      value: '1',
      label: 'זכר',
    },
    {
      value: '2',
      label: 'נקבה'
    }
  ]

  const getDefault = type => {
    switch (type) {
      case 'text':
        return '';
      case 'number':
        return 0;
      case 'date':
        return (new Date()).toLocaleDateString('fr-CA');
      case 'datetime-local':
        return (new Date()).toJSON().substring(0, 16);
      case undefined:
        return '1';
    }

  }
  return (
    <div className={classes.rowContainer}>
      <Grid container spacing={1}>
        {inputsInfo.map((inputInfo) => (
          <Grid item container direction='column' alignItems='center' key={inputInfo.key} xs>
            {indexInArr === 0 ? <h5>{inputInfo.displayName}</h5> : ''}
            <TextField type={inputInfo.type} name={inputInfo.key} select={inputInfo.isSelect} value={events[indexInArr][inputInfo.key] || getDefault(inputInfo.type)} onChange={handleChange} className={inputInfo.isDateTime ? classes.textField : ''}>
              {inputInfo.isSelect ? genderOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              )) : undefined}
            </TextField>
          </Grid>
        ))}
        {/* <Grid item container direction='column' justifyContent='center' xs>
          <DeleteForever></DeleteForever>
        </Grid> */}
      </Grid>
    </div>
  );
}


export default CandidateRow;