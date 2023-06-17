import Home from './Components/Home';
import NewPost from './Components/NewPost';
import Post from './Components/Post'
import About from './Components/About';
import {Route , Routes } from 'react-router-dom'
import Layout from './Components/Layout';
import Missing from './Components/Missing';
import EditPost from './Components/EditPost';
import { DataProvider } from './Context/DataContext';


function App() {
/*
const [posts, setPosts] = useState([])
const [search, setSearch] = useState('')
const [searchResults, setSearchResults] = useState([])
const [postTitle, setPostTitle] = useState('')
const [postBody, setPostBody] = useState('')
const [editedTitle, setEditedTitle] = useState('');
const [editedBody, setEditedBody] = useState('')
const navigate = useNavigate()

const {data, fetchError, isLoading} = useAxiosFetch(' http://localhost:3500/posts')

  useEffect(() => {
    setPosts(data)
  }, [data])
 useEffect (()=> {
  const filteredResults = posts.filter((post)=> 
    ((post.body).toLowerCase()).includes(search.toLowerCase()) 
    || ((post.title).toLowerCase()).includes(search.toLowerCase()) 
    )
  setSearchResults(filteredResults.reverse())
 }, [posts,search])

 const handleDelete = async(id) => {
  try {
    await api.delete(`/posts/${id}`);
    const listItems = posts.filter((post)=> post.id !== id);
    setPosts(listItems)
    navigate('/');
  }catch(err){
    console.log(err.message);
  }
  
}

const handleEditUpdate = async(id) => {
  const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
  const editedPost = {id, title : editedTitle, dateTime : dateTime, body : editedBody}
  try { 
    const  response = await api.patch(`/posts/${id}`, editedPost)
    setPosts(posts.map(post => post.id === id ? {...response.data} : post))
    setEditedBody('')
    setEditedTitle('')
    navigate('/');
  }catch(err){
    console.log(`error : ${err.message}`);
  }
}
const handleAddPost = async(e) => {
  e.preventDefault();
  const id = posts.length ? posts[posts.length - 1 ].id + 1 : 1 ;
  const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
  const newPost = {id, title : postTitle, dateTime : dateTime, body : postBody}
  try{
    const response = await api.post('/posts', newPost)
    const allPost = [...posts, response.data ]
    setPosts(allPost);
    setPostTitle('')
    setPostBody('')
    navigate('/');
  }catch(err){
    console.log(err.message);
  }
  
}*/
  return (
    <div className="App">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Layout />} > 
              <Route index element={<Home  />} />
                <Route path='post'>
                  <Route index 
                    element={
                    <NewPost />} />
                  <Route  path ="edit/:id"element={
                    <EditPost/>} />
                  <Route path=':id' 
                    element= {<Post />}
                    />
                    
                </Route>
              <Route path='about' element={<About/>}/>
              <Route path='*' element={<Missing/>} />
          </Route>
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
