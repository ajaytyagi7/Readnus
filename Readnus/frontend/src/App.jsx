import './App.css'
import Home from './Components/Home'
import { BrowserRouter,Routes,Route, NavLink,Link } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import { SnackbarProvider } from 'notistack'
import List from './Components/List'
import Write from './Components/Write'
import Details from './Components/Details'
import Blog from './Components/Blog'
import ManageuserData from './Components/ManageuserData'
import ManageStory from './Components/ManageStory'
import UploadBlog from './Components/UploadBlog'
import BlogDetails from './Components/BlogDetails'
import Payment from './Components/Payment'
import Admin from './Components/Admin'
import ManageBlog from './Components/ManageBlog'
import Footer from './Components/Footer'
import { UserProvider } from "./UserContext";

function App() {

  return (
    <>
    <SnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} >
    <BrowserRouter>
    <UserProvider>
    <Navbar/>
    <Routes>
       <Route path='/' element={<Home/>}/>
      <Route path='Home' element={<Home/>}/>
      <Route path='Signin' element={<Signin/>}/>
      <Route path='Signup' element={<Signup/>}/>
      <Route path='List' element={<List/>}/>
      <Route path='Write' element={<Write/>}/>
      <Route path='Details' element={<Details/>}/>
      <Route path='Blog' element={<Blog/>}/>
      <Route path='UploadBlog' element={<UploadBlog/>}/>
      <Route path='BlogDetails' element={<BlogDetails/>}/>
      <Route path='Payment' element={<Payment/>}/>
      <Route path='Admin' element={<Admin/>}/>




      <Route path='ManageuserData' element={<ManageuserData/>}/>
      <Route path='ManageStory' element={<ManageStory/>}/>
      <Route path='ManageBlog' element={<ManageBlog/>}/>








    </Routes>
    <Footer/>
    </UserProvider>
    </BrowserRouter>
    </SnackbarProvider>
    </>
  )
}

export default App
