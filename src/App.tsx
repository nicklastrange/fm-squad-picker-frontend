import React from 'react';
import './App.css';
import Layout from "./components/Layout";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <Layout></Layout>
            </div>
        </DndProvider>
    );
}

export default App;
