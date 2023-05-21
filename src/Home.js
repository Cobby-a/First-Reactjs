import { useState } from "react"
import BlogList from "./BlogList";


const Home = () => {
    const[blogs, setBlogs] = useState([
        {title: 'My new website', body: 'uhuhrwiuhiurhiw ...', author: 'yueghjbeewiuu', id: 1},
        {title: 'Welcome party!', body: 'huehfuweh ...', author: 'iuhuuhiu', id: 2},
        {title: 'Web dev top tips', body: 'give me ...', author:"yuiuewi", id: 3}
    ]);
    return(
        <div className="home">
            <BlogList blogs = {blogs} title="All Blogs!"/>
        </div>
    )
}

export default Home;