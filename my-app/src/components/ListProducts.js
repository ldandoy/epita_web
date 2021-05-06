import { useEffect, useState } from 'react'

export default () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            setPosts(json)
        })
    }, [])

    return (<>
        <h1>List Products</h1>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    </>)
}