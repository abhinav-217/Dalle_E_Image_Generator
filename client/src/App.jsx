import React from 'react'
import {BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import {logo} from './assets';
import {Home, CreatePost,SubmitPost} from './pages';
import './App.css'
const app = () => {
  return (
      <BrowserRouter>
        <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to = '/'>
          <img src = {logo} alt = 'logo' className = "w-28 object-contain "/>
        </Link>
        <Link to = '/create-post' className = "font-inter font-medium bg-[#6409ff] text-white px-4 py-2 rounded-md">
          Create
        </Link>
        {/*<Link to = '/submit-post' className = "font-inter font-medium bg-[#6409ff] text-white px-4 py-2 rounded-md">
          Post Your Work
        8*</Link>*/}
        </header>
        <main className = "sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path = "/" element = {<Home/>}/>
            <Route path = "/create-post" element = {<CreatePost/>}/>
           { /*<Route path = "/submit-post" element = {<SubmitPost/>}/>*/}
          </Routes>
        </main>
      </BrowserRouter>
  )
}

export default app
