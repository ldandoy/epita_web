import { useHistory } from 'react-router-dom'
import Listposts from '../components/Listposts'

export default () => {
    let history = useHistory();

    const handleClick = (e) => {
        history.push("/");
    }

    return (<>
            <Listposts />
            <button onClick={handleClick}>Home Page</button>
        </>
    )
}