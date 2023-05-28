import { useEffect, useState } from "react"
import BlogList from "./BlogList";


const Home = () => {
    const[blogs, setBlogs] = useState(null);

const [name, setName] = useState('Emma')
useEffect (()=>{
    fetch('http://localhost:4000/blogs')
        .then(response =>{
            return response = response.json();
        })
        .then(data =>{
            setBlogs(data)
        });
},[])
    return(
        <div className="home">
            {blogs && <BlogList blogs = {blogs} title="All Blogs!"/>}
            <button onClick={()=>setName('Cobby')}>Change name</button>
            <p>{name}</p>
            {/* <BlogList blogs = {blogs.filter((blog)=>(blog.author==='mario'))} title="Mario's Blogs"/> */}
        </div>
    )
}

export default Home;