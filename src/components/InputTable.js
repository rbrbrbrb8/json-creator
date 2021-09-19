import { useRef, useState } from 'react';
import React from 'react';
import CandidateRow from './CandidateRow';
import InputTableHeader from './InputTableHeader';
const inputsInfo = require('./inputsInfo');
const FileSaver = require('file-saver');

function InputTable() {
  const [test, setTest] = useState([{ eventstatus: 10, eventlocation: 10005126 }]);
  const inputInfoContext = React.createContext(null);
  const addInput = () => {
    console.log('ok')
    setTest([...test, { eventstatus: 10, eventlocation: 10005126 }]);
  }
  const createJson = event => {
    event.preventDefault();
    const total = {
      events: test
    }
    const toDownload = JSON.stringify(total);
    const blob = new Blob([toDownload]);
    FileSaver.saveAs(blob, 'test.json');     
    setTest([{ eventstatus: 10, eventlocation: 10005126 }]);
  }
  return (
    <div>
        <inputInfoContext.Provider value={inputsInfo}>
          {test.map((elem, i) => (
            <CandidateRow key={i} test={test} inputsInfo={inputInfoContext} setTest={setTest} indexInArr={i} />
          ))}
          <button onClick={addInput}>add row</button>
          <button type='submit' onClick={createJson}>create JSON</button>
        </inputInfoContext.Provider>
    </div>
  );
}

export default InputTable;