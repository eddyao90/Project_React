import React from "react";
import { Link } from 'react-router-dom';

export default function Start() {
    return (
        <div>
        <h1>Start</h1>
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