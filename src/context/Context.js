import {createContext} from 'react';

const NotesContext = createContext( {
    currentNote: null,
    notes: [
        { id:1, text: 'create react app using hooks' },
        { id:2, text: 'connect to graphql' },
        { id:3, text: 'send the project to server' }
    ]
} );

export default NotesContext;


