import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'

import Register from './Component/Register'

import Login from './Component/Login'

import Notfound from './Component/Notfound'

import Track from './Component/Track'

import Diet from './Component/Diet'

import Home from './Component/Home'

import { UserContext } from './contexts/context'
import { useState } from 'react'

// import { useNavigate } from 'react-router-dom'
import Private from './Component/Private'


function App() {

  const [loggedUser, setLoggedUser] = useState(() => {
    const user = localStorage.getItem("nutrify-user");
    return user ? JSON.parse(user) : null;
  });

  console.log("loggedUser", loggedUser)


  // useEffect(() => {

  //   const user = localStorage.getItem("nutrify-user")
  //   console.log("context", loggedUser)

  //   if (user) {
  //     setLoggedUser(JSON.parse(user))


  //   }

  // }, [])

  return (
    <>
      {/* to access api data globally */}
      <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            {/* <Route path='/' element={<Login />}></Route> */}
            <Route path='/register' element={<Register />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/track' element={<Private Component={Track} />}></Route>
            <Route path='/diet' element={<Private Component={Diet} />}></Route>

            {/* if none of path mentioned above is passed move to not found page */}

            <Route path='*' element={<Notfound />}></Route>
          </Routes>
        </BrowserRouter>

      </UserContext.Provider>
    </>
  )
}

export default App
