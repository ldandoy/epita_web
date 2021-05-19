import { useEffect, useState } from 'react'
import { getAll } from '../services/Post'

import styles from './Listposts.module.css'

export default () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        (async () => {
            let fetchedPosts = await getAll()
            setPosts(fetchedPosts)
        })()

    }, [])

    return (
        <div>
            <h1 className={styles.title}>List of posts</h1>
            <ul>
                { posts && posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}