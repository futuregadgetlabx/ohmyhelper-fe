import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home.tsx'
import { AppGallery } from '@/components/home/AppGallery.tsx'
import { AppDetail } from '@/components/app/AppDetail.tsx'
import Login from '@/pages/Login.tsx'
import SignUp from '@/pages/SignUp.tsx'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />}>
            <Route index element={<AppGallery />} />
          </Route>
          <Route path="/apps" element={<Home />}>
            <Route path=":id" element={<AppDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
