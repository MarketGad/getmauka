import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";
import Editor from "../Editor";

export default function CreatePost() {
  const [title,setTitle] = useState('');
  const [summary,setSummary] = useState('');
  const [content,setContent] = useState('');
  const [files, setFiles] = useState('');
  const [location,setLocation] = useState('');
  
  const [category,setCategory] = useState('');
  const [redirect, setRedirect] = useState(false);
  
  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('location', location);
    data.set('category', category);
    data.set('file', files[0]);
    ev.preventDefault();
    const response = await fetch('/post', {
      method: 'POST',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <div style={{marginLeft:"30%", marginBottom:"10%"}}>
    <form onSubmit={createNewPost}>
      <input type="title"
             placeholder={'Title'}
             value={title}
             onChange={ev => setTitle(ev.target.value)} />
             <br></br>
      <input type="summary"
             placeholder={'Summary'}
             value={summary}
             onChange={ev => setSummary(ev.target.value)} />
       <br></br>
      

<input type="text" value={location} placeholder={'location'} onChange={ev => setLocation(ev.target.value)} />

<br></br>
<input type="file"
             onChange={ev => setFiles(ev.target.files)} />

<br></br>
      <input type="text" value={category}  placeholder={'category'}onChange={ev => setCategory(ev.target.value)} />
      <br />

      <Editor value={content} onChange={setContent} />

      <button style={{marginTop:'5px'}}>Create post</button>
    </form>
    </div >
  );
}