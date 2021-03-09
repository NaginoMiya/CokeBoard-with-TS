import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { RecoilRoot } from "recoil";
import App from "./App";

ReactDOM.render(
    <RecoilRoot>
        <DndProvider backend={HTML5Backend}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </DndProvider>
    </RecoilRoot>,
    document.getElementById("root")
);
