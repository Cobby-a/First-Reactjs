import { useEffect, useState } from "react"
import BlogList from "./BlogList";


const Home = () => {
    const[blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

// const [name, setName] = useState('Emma')
useEffect (()=>{
    setTimeout(()=>{fetch('http://localhost:4000/blogss')
        .then(response =>{
            if(!response.ok){
                throw Error("couldn't load your resources due to some error, try again")
            }
            return response.json();
        })
        .then(data =>{
            setBlogs(data)
            setIsPending(false)
            setError(null);
        })
        .catch(err =>{
            setBlogs(null)
            setIsPending(false);
            setError(err.message);
        });
},1000);
},[])
    return(
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>is Loading ...</div>}
            {blogs && <BlogList blogs = {blogs} title="All Blogs!"/>}
            {/* <button onClick={()=>setName('Cobby')}>Change name</button>
            <p>{name}</p> */}
            {/* <BlogList blogs = {blogs.filter((blog)=>(blog.author==='mario'))} title="Mario's Blogs"/> */}
        </div>
    )
}

export default Home;