import React from 'react';
import InputTable from './components/InputTable';
import {EventsProvider} from './context/EventsContext';

function App() {

  return (
    <div>
      <EventsProvider>
        <h1>bdika</h1>
        <InputTable/>
      </EventsProvider>
    </div>
  );
}

export default App;