import { useState } from "react";


function Login({ handleLogin }) {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center text-white">
            <div className="border-2 rounded-xl border-emerald-600 p-8 sm:p-20">
                <form action="" className="flex flex-col items-center justify-center" onSubmit={(e) => submitHandler(e)} >
                    <input className="outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full " type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className="outline-none bg-transparent placeholder:text-gray-400 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-4" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className="mt-5 outline-none border-none bg-emerald-600 text-xl py-3 px-5 rounded-full ">Log In</button>
                </form>

            </div>

        </div>
    )
}

export default Login
