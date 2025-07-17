import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
/*^how react handles different pages*/ 
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import DiscoverEla from './Components/DiscoverEla/DiscoverEla'
import MeetTheWomen from './Components/MeetTheWomen/MeetTheWomen'

const App = () => {
  return (
    /*Router wraps everything properly*/
    <Router>
      <Navbar /> {/* Always visible */}
      <Routes>
        {/* Define your routes here */}
        <Route path="/" element={<Home />} />
        <Route path="/discover-ela" element={<DiscoverEla />} />
        <Route path="/meet-the-women" element={<MeetTheWomen />} />
      </Routes>
    </Router>
  )
}

export default App