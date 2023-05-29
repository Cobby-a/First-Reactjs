import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    const{data: blogs, error, isPending} = useFetch('http://localhost:4000/blogs')

// const [name, setName] = useState('Emma')

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