import Header from './components/Header'
import Footer from './components/Footer'
import Spinner from './components/Spinner'
import { useSelector } from 'react-redux'
import Home from './components/pages/Home'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Blog from './components/pages/Blog'

import Html from './components/pages/codingPages/Html'
import Css from './components/pages/codingPages/Css'
import Node from './components/pages/codingPages/Node'
import Coding from './components/pages/Coding'
import ReactGuide from './components/pages/blogPages/ReactGuide'
import PrivacyPolicy from './components/pages/PrivacyPolicy'
import FAQ from './components/pages/FAQ'
function App() {
  const {isLoading}  = useSelector((state) => state.auth)
  
  if(isLoading){
    return <Spinner/>
  }
  
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={<Home></Home>}></Route>
          <Route path='/blog' component={Blog}></Route>
          <Route path='/coding/html' component={<Html></Html>}></Route>
          <Route path='/coding/css' component={<Css></Css>}></Route>
          <Route path='/coding/node' component={<Node></Node>}></Route>
          <Route path='/coding' component={<Coding></Coding>}></Route>
          <Route path='/coding/react-guide' component={<ReactGuide></ReactGuide>}></Route>
          <Route path='/privacy-policy' component={<PrivacyPolicy></PrivacyPolicy>}></Route>
          <Route path='/faq' component={<FAQ></FAQ>}></Route>
        </Switch>
      <Footer />
      </Router>
    </>
  )
}

export default App
