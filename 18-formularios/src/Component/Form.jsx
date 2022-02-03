import React, { useState } from 'react'

const Form = () => {

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const submitForm = (e) => {
        e.preventDefault();

        if (email && password) {
            setEmail("");
            setPassword("");
        } else {
            alert('Favor verifcar o preenchimento de seu formulário')
        }
    }

    return (
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <input type="text" name="email" id="email" autoComplete="off"
                        value={email} placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <input type="password" name="password" id="pwd" placeholder="Digite sua senha"
                        value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type="submit">Enviar</button>
            </form>
            <h3>{email}</h3>
            <h3>{password}</h3>
        </>
    )
}

export default Form
