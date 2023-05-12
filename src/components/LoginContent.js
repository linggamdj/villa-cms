import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../pages";

const LoginContent = (props) => {
    const { loginCbHandler } = props;

    const [isLogin, setIsLogin] = useState(true);

    const isLoginHandler = (result) => {
        setIsLogin(result);
    };

    useEffect(() => {}, [isLogin]);

    return (
        <Routes>
            {isLogin ? (
                <Route
                    path=""
                    element={
                        <Login
                            loginCbHandler={loginCbHandler}
                            isLoginHandler={isLoginHandler}
                        ></Login>
                    }
                ></Route>
            ) : (
                <Route
                    path=""
                    element={
                        <Register isLoginHandler={isLoginHandler}></Register>
                    }
                ></Route>
            )}
        </Routes>
    );
};

export default LoginContent;
