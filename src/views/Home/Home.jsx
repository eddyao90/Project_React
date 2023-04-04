import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
        <h1>Home</h1>
        <div>
            <Link to='/register'>
                <button>Register</button>
            </Link>
            <Link to='/login'>
                <button>Login</button>
            </Link>
        </div>
        </div>
    )
}