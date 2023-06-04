import { useState } from "react";


const Create = ()=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    return(
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
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
                <button>Add Blog</button>
                <p>Title: {title}</p>
                <p>{body}</p>
                <p>By: {author}</p>
            </form>
        </div>
    )
}

export default Create;