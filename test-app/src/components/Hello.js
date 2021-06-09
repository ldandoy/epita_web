import {useState} from 'react'

import styles from './Hello.module.css'

const Hello = () => {
    const [name, setName] = useState('')
    const [showHello, setShowHello] = useState(false)

    const onChangeHandler = (e) => {
        if (e.target.value.length <= 7) {
            setName(e.target.value)
        }
        setShowHello(false)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        setShowHello(true)
    }

    const onClickHandler = (e) => {
        setShowHello(false)
        setName('')
    }

    return <>
        <img src="/img/bg.jpg" alt="picture" className={styles.image} />
        { !showHello && <form onSubmit={submitHandler}>
            <input 
                type="text" 
                name="name" 
                value={name}
                onChange={onChangeHandler}
            />
            <input type="submit" value="Say Hello" className={`${styles.button}`} /> ({name.length})
        </form> }
        <div onClick={onClickHandler}>{showHello && `Hello ${name} !`}</div>
    </>
}

export default Hello