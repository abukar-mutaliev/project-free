import React, {Suspense, useCallback, useContext, useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss'

import {AboutAsync} from "./page/AboutPage/About.async";
import {MainAsync} from "./page/MainPage/Main.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";



function App(props) {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [])}>
            <button onClick={toggleTheme}> TOGGLE</button>
            <Link to={'/main'}>Главная страница</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>...Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutAsync/>}/>
                    <Route path={'/main'} element={<MainAsync/>}/>
                </Routes>
            </Suspense>

        </div>
    );
}

export default App;