import React from 'react';

const LoginPage = () => {

    return (
        <div><p>Zaloguj sie</p>

            <label>Login: <input type="text" /></label>
            <label>Hasło: <input type="password" /></label>
            <button>Zaloguj</button>
        </div>


    );
}

export default LoginPage;