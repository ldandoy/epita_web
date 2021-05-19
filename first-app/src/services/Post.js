export const getAll = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await response.json()
    console.log(posts)
    return posts
}