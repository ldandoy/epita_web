import { useState } from 'react'

export default () => {

    const [login, setLogin] = useState()

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onchange = (e) => {
        setLogin(e.target.value)
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" value={login} onChange={onchange} name="login" />
            <input type="submit" name="Envoyer" />
        </form>
    )
}