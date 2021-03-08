import { FC } from "react";
import firebase from "firebase/app";
import firebaseConfig from "./firebaseConfig";

import "./App.css";

import MainPage from "./PresentationalComponents/Pages/MainPage";

firebase.initializeApp(firebaseConfig);

const App: FC = () => (
    <div className="App">
        <MainPage isLoading={false} />
    </div>
);

export default App;
