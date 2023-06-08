import { useState } from "react";
// import {useHistory} from 'react-router-dom' -- updated to ....
import { useNavigate } from "react-router-dom";

const Create = ()=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setISPending] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        setISPending(true)
        const blog = {title, body, author}
        fetch ('https://my-blog-data-backend.onrender.com/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New Blog Added')
            setISPending(false);
            navigate('/');
        })
    }
    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required 
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}
                >
                </textarea>
                <label>Blog author:</label>
                <input
                    type="text"
                    required
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                />
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled style={{background: "#D5D5D5", color: "#333333"}}>Adding Blog...</button>}
                {/* <p>Title: {title}</p>
                <p>{body}</p>
                <p>By: {author}</p> */}
            </form>
        </div>
    )
}

export default Create;