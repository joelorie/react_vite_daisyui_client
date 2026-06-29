import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
