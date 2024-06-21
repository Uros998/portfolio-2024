import './App.scss'
import MainPage from "./pages/main-page/main-page.tsx";
import {Route, Routes} from "react-router-dom";
import {createContext, useState} from "react";
import Navbar from "./components/navbar/navbar.tsx";


export const ThemeContext = createContext(null as unknown as string);

function App() {
    const [theme, setTheme] = useState('light');


    const handleSetTheme = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <>
            <ThemeContext.Provider value={theme}>
                <div id={theme}>
                    <div className={'background-image'}></div>
                    <Navbar theme={theme} setTheme={handleSetTheme}/>
                    <Routes>
                        <Route path={"*"} element={<MainPage />}/>
                    </Routes>
                    {/*<Footer/>*/}
                </div>
            </ThemeContext.Provider>
        </>
    )
}

export default App
