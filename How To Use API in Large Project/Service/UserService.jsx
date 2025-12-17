 
 const URL = import.meta.env.VITE_URL_POSTS;
 export const getPosts = async() =>{
    const res = await fetch(URL);
    return res.json()
 }
 export const getPostsById = async(id) =>{
    const res = await fetch(`${URL}/${id}`);
    return res.json()
 }