import { FC, useContext } from "react";
import { Route, Routes, Navigate } from "react-router";

import "./App.css";

import UserContext from "./Contexts/UserContextValue";
import MainPage from "./PresentationalComponents/Pages/MainPage";
import LandingPage from "./PresentationalComponents/Pages/LandingPage";

const App: FC = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        user === null ? (
                            <LandingPage />
                        ) : (
                            <Navigate to="/App" replace />
                        )
                    }
                />
                <Route
                    path="/App"
                    element={
                        user === null ? (
                            <Navigate to="/" replace />
                        ) : (
                            <MainPage isLoading={false} />
                        )
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
