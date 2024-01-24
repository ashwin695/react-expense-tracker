import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./auth-context";
import "./VerifyEmail.css"

const VerifyEmail = () => {
    const authCtx = useContext(AuthContext)
    const navigate = useNavigate()

    const verifyEmailHandler = () => {
        fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyAoPjvxfipiUuRYpafgtPIncYCdPp6UGB4',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body:
                    JSON.stringify({
                        requestType: "VERIFY_EMAIL",
                        idToken: authCtx.token,
                }),
            }
        )
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            console.log(data)
            alert("Verification link to sent to your email")
            navigate('/home')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return(
        <div className="verify-email">
            <button onClick={verifyEmailHandler}>Verify Email</button>
        </div>
    )
}

export default VerifyEmail