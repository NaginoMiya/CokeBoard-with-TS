import { FC } from "react";
import { Route, Routes } from "react-router";

import "./App.css";

import MainPage from "./PresentationalComponents/Pages/MainPage";
import SignIn from "./ContainerComponents/Atoms/SignInButton";
import SignOut from "./ContainerComponents/Atoms/SignOutButton";

const App: FC = () => (
    <div className="App">
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <SignIn />
                        <SignOut />
                    </>
                }
            />
            <Route path="/App" element={<MainPage isLoading={false} />} />
        </Routes>
    </div>
);

export default App;
