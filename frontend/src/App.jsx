import Header from './components/Header'
import Footer from './components/Footer'
import Spinner from './components/Spinner'
import { useSelector } from 'react-redux'
import Home from './components/pages/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Blog from './components/pages/Blog'

import Html from './components/pages/codingPages/Html'
import Css from './components/pages/codingPages/Css'
import Node from './components/pages/codingPages/Node'
import Coding from './components/pages/Coding'
import ReactGuide from './components/pages/blogPages/ReactGuide'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import FAQ from './components/pages/FAQ'
function App() {
  console.log(window.location.pathname)
  const {isLoading}  = useSelector((state) => state.auth)
  
  if(isLoading){
    return <Spinner/>
  }
  
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/coding/html' element={<Html></Html>}></Route>
          <Route path='/coding/css' element={<Css></Css>}></Route>
          <Route path='/coding/node' element={<Node></Node>}></Route>
          <Route path='/coding' element={<Coding></Coding>}></Route>
          <Route path='/coding/react-guide' element={<ReactGuide></ReactGuide>}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy></PrivacyPolicy>}></Route>
          <Route path='/faq' element={<FAQ></FAQ>}></Route>
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
