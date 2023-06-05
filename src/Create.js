import { useState } from "react";


const Create = ()=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setISPending] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setISPending(true)
        const blog = {title, body, author}
        fetch ('http://localhost:4000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New Blog Added')
            setISPending(false);
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
                <select
                    value={author}
                    onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value=""></option>
                    <option value="Cobby">Cobby</option>
                    <option value="Yaa">Yaa</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog...</button>}
                <p>Title: {title}</p>
                <p>{body}</p>
                <p>By: {author}</p>
            </form>
        </div>
    )
}

export default Create;