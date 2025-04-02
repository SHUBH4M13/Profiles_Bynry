import HomePage from "./Pages/HomePage"
import ProfilePage from "./Pages/ProfilePage"
import { BrowserRouter as Router, Routes, Route } from "react-router"; 
function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element = {<HomePage/>}/>
      <Route path="/profile:" element = {<ProfilePage/>}/>
      </Routes>
    </Router>
    
  )
}

export default App;
