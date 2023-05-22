import { useEffect, useState } from "react"
import BlogList from "./BlogList";


const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new website', body: 'uhuhrwiuhiurhiw ...', author: 'mario', id: 1},
        {title: 'Welcome party!', body: 'huehfuweh ...', author: 'yoshi', id: 2},
        {title: 'Web dev top tips', body: 'give me ...', author:"mario", id: 3}
    ]);

const [name, setName] = useState('Emma')
const handleClick = (id) => {
    const del = blogs.filter((blog)=>blog.id !==id)
    setBlogs(del)
}
useEffect (()=>{
    console.log('first')
    console.log(name)
},[name])
    return(
        <div className="home">
            <BlogList blogs = {blogs} title="All Blogs!" handleClick={handleClick}/>
            <button onClick={()=>setName('Cobby')}>Change name</button>
            <p>{name}</p>
            {/* <BlogList blogs = {blogs.filter((blog)=>(blog.author==='mario'))} title="Mario's Blogs"/> */}
        </div>
    )
}

export default Home;