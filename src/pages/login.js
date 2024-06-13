import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from '../assets/images/login.jpg'; 

function Login() {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function submit(e) {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8000/login", {
                email,
                password
            });

            if (res.data === "exist") {
                history("/nuur", { state: { id: email } });
            } else if (res.data === "notexist") {
                alert("User has not signed up");
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
            console.error(error);
        }
    }

    return (
        <div className="mt=[10%]">
            <img src={backgroundImage} alt="Sofa" className="mt-[-20%] ml-[-10%] border p-4 float-left max-w-full max-h-full" />
        <div className="rounded w-96 ml-[650px] mt-80">
        <h1 className="text-2xl font-semibold mb-4"><center>Login</center></h1>
        <form>
            <div className="mb-2 w-full">
                <input
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
            </div>
            <div className="mb-2 w-full">
                <input
                    className="border border-gray-300 rounded-md px-3 py-2 w-full"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
            </div>
            <div className="mb-2 w-full">
                <button
                    className="bg-blue-500 text-white rounded-md px-4 py-2 w-full hover:bg-blue-600"
                    type="submit"
                    onClick={submit}
                >
                    Submit
                </button>
            </div>
        </form>
        <p className="mt-4 text-gray-600"><center>OR</center></p>
        <Link
            to="/signup"
            className="text-blue-500 hover:underline mt-2 block"
        >
            <center>Signup Page</center>
        </Link>
    </div>
    <p className="mt-72"></p>
</div>

    );
}

export default Login;
