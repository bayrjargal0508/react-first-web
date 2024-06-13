import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import backgroundImage from '../assets/images/login.jpg';

function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [username, setUsername] = useState('');

    async function submit(e) {
        e.preventDefault();
        if (password !== repeatPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const response = await axios.post("http://localhost:8000/signup", { email, password, username });
            console.log("Response:", response.data);
            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                navigate("/login", { state: { id: email } });
            } else {
                alert("An error occurred. Please try again.");
            }
        } catch (error) {
            console.log("Error:", error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <div className="mt-[10%]">
            <img src={backgroundImage} alt="Sofa" className="mt-[-20%] ml-[-10%] border p-4 float-left max-w-full max-h-full" />
            <div className="rounded w-96 ml-[650px] mt-80">
                <h1 className="text-2xl font-semibold mb-4"><center>Sign UP</center></h1>
                <form>
                    <div className="mb-2 w-full">
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-96"
                        />
                    </div>
                    <div className="mb-2 w-full">
                        <input
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-96"
                        />
                    </div>
                    <div className="mb-2 w-full">
                        <input
                            type="password"
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            placeholder="Repeat Password"
                            className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-96"
                        />
                    </div>
                    <div className="mb-2 w-full">
                        <input
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                            className="border border-gray-300 rounded-md px-3 py-2 mb-2 w-96"
                        />
                    </div>
                    <div className="mb-2 w-full">
                        <button
                            type="submit"
                            onClick={submit}
                            className="bg-blue-500 text-white rounded-md px-4 py-2 w-96 hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-gray-600"><center>OR</center></p>
                <Link
                    to="/login"
                    className="text-blue-500 hover:underline mt-2 block"
                >
                    <center>Login</center>
                </Link>
            </div>
            <p className="mt-72"></p>
        </div>
    );
}

export default Signup;
