import React, {useContext, useReducer} from 'react';
import './App.css';
import Nav from "./components/Nav";
import NotesContext from "./context/Context";
import notesReducer from "./context/reducer";

function App() {
    const initialState = useContext(NotesContext);
    const [state,dispatch] = useReducer(notesReducer,initialState);
    return (
        <>
           <NotesContext.Provider>
                <Nav/>
            </NotesContext.Provider>

        </>
    );
}

export default App;
