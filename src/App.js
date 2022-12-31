import React, { useState } from 'react';

function RegisterForm() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    function handleSubmit(event) {
        setSuccess(true);
    }

    return (
        <form onSubmit={handleSubmit}>
            {success ? (
                alert('Успешная регистрация')
            ) : (
                <>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={event => setName(event.target.value)} />
                    </label>
                    <label>
                        Surname:
                        <input type="text" value={surname} onChange={event => setSurname(event.target.value)} />
                    </label>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
                    </label>
                    <button type="submit">Регистрация</button>
                </>
            )}
        </form>
    );
}

export default RegisterForm;