import { FC } from "react";
import "./App.css";

import MainPage from "./PresentationalComponents/Pages/MainPage";

import { db } from "./FireBase";

const App: FC = () => {
    // FireBaseのテスト
    const tmp = async () => {
        const docRef = db.collection("ts-test").doc("test-doc");
        console.log((await docRef.get()).data());
    };

    tmp().catch((err) => console.log(err));

    return (
        <div className="App">
            <MainPage isLoading={false} />
        </div>
    );
};

export default App;
