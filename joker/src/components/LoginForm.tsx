import React, { useState } from 'react';

function LoginForm( { Login, error } ) {
    const [details, setDetails] = useState({azonosito: "", jelszo: ""});

    const submitHandler = (e: any) => {
        e.preventDefault();

        Login(details);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="from-inner">
                <h2>Login</h2>
                {(error != "") ? ( <div className="error">{error}</div>) : ""}
                <div className="form-group">
                    <label htmlFor="azonosito">Azonosító:</label>
                    <input type="text" name="azonosito" id="azonosito" onChange={e => setDetails({...details, azonosito: e.target.value})} value={details.azonosito}/>
                </div>
                <div className="form-group">
                    <label htmlFor="jelszo">Jelszó:</label>
                    <input type="password" name="jelszo" id="jelszo" onChange={e => setDetails({...details, jelszo: e.target.value})} value={details.jelszo}/>
                </div>
                <input type="submit" value="Belépés"/>
            </div>
        </form>
    )
}

export default LoginForm;
