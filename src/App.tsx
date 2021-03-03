import { FC } from "react";
import "./App.css";

import MainPage from "./PresentationalComponents/Pages/MainPage";

const App: FC = () => (
    <div className="App">
        <MainPage isLoading={false} />
    </div>
);

export default App;
