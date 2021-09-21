import React, { useContext, useState } from "react";

const EventsContext = React.createContext();
const AddRowContext = React.createContext();
const ResetContext = React.createContext();
const ChangeEventDetailsContext = React.createContext();

export function useEvents() {
  return useContext(EventsContext);
}

export function useAddRow() {
  return useContext(AddRowContext);
}

export function useReset() {
  return useContext(ResetContext);
}

export function useChangeEventDetails() {
  return useContext(ChangeEventDetailsContext);
}

export function EventsProvider({ children }) {
  const [events, setEvents] = useState([{ eventstatus: 10, eventlocation: 10005126 }]);

  const fixDate = date => {
    const extra = ':00+000:00.00'
    console.log(date + extra);
    return date;
  }

  const addRow = () => {
    setEvents([...events, { eventstatus: 10, eventlocation: 10005126 }]);
  };

  const reset = () => {
    setEvents([{ eventstatus: 10, eventlocation: 10005126 }]);
  }

  const changeEventDetails = function (newEvents) {
    setEvents(newEvents);
  }
  return (
    <EventsContext.Provider value={events}>
      <AddRowContext.Provider value={addRow}>
        <ResetContext.Provider value={reset}>
          <ChangeEventDetailsContext.Provider value={changeEventDetails}>
            {children}
          </ChangeEventDetailsContext.Provider>
        </ResetContext.Provider>
      </AddRowContext.Provider>
    </EventsContext.Provider>
  )
}
