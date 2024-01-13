import React, { useEffect } from "react";
import Header from "../Components/Header";
import StartingPageContent from "../Components/StartPage";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./auth-context";

export default function Home(){
    const authCtx = useContext(AuthContext);
    console.log(authCtx.isLoggedIn);
    const navigate = useNavigate();

    const profileHandler = () => {
        navigate("./profile");
    };

    return(
    <div>
        <>
            {authCtx.isLoggedIn ? (
                <section style={{ margin: '3rem auto', textAlign:'center' }}>
                <p style={{ fontSize:'2rem'}}>Welcome to Expense Tracker!!!</p>
                <div>
                    <p>Your profile is incomplete.</p>
                    <button onClick={profileHandler}>Complete Now</button>
                </div>
                </section>
            ) : (
                    <>
                    <Header />
                    <StartingPageContent />;
                    </>
            )}
        </>

        
    </div>
    )
}