import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import firebase from "firebase/app";
import FirebaseApp from "./FirebaseApp";
import firebaseConfig from "./firebaseConfig";

import App from "./App";

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <FirebaseApp>
                <DndProvider backend={HTML5Backend}>
                    <App />
                </DndProvider>
            </FirebaseApp>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
