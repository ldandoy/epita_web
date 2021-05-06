export const Increments = ({value, setValue}) => {
    const clickHandler = () => {
        setValue(value + 1)
    }

    return (
        <div>
            <button onClick={clickHandler}>Inscrement</button>
        </div>
    )
}

export const Decrements = ({value, setValue}) => {
    const clickHandler = () => {
        setValue(value - 1)
    }

    return (<div>
        <button onClick={clickHandler}>Decrement</button>
    </div>)
}