import { useContext, useState } from 'react';
import React from 'react';
import { useEvents, useAddRow, useReset } from '../context/EventsContext';
import CandidateRow from './CandidateRow';
import { Accordion, AccordionDetails, Button } from '@material-ui/core';
const inputsInfo = require('../info/inputsInfo');
const FileSaver = require('file-saver');

function InputTable(props) {
  const eventsStore = useEvents();
  const addRow = useAddRow();
  const reset = useReset();
  console.log(eventsStore)
  const createJson = event => {
    event.preventDefault();
    const total = {
      events: eventsStore
    }
    const toDownload = JSON.stringify(total);
    const blob = new Blob([toDownload]);
    FileSaver.saveAs(blob, 'test.json');
    reset();
  }
  return (
    <div>
        {eventsStore.map((elem, i) => (
            <CandidateRow key={i} indexInArr={i} />
        ))}
      <Button variant='contained' onClick={addRow}>Add Row</Button>
      <Button variant='contained' onClick={createJson} color='primary'>Create JSON</Button>
    </div>
  );
}

export default InputTable;