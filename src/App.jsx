import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import { Homepage } from './components/Homepage'
import { Root } from './components/Root'
import { TarotSuits } from './components/TarotSuits'
import { Reading } from './components/Reading'
import { Blog } from './components/Blog'
import { MajorArcanaCardsCard } from './components/MajorArcanaCardsCard'
import { SingleCard } from './components/SingleCard'
import { Footer } from './components/Footer'

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index path="/" element={<Homepage />}/>
        <Route index path="/majorArcana" element={<MajorArcanaCardsCard />}/>
        <Route index path="/suits" element={<TarotSuits />}/>
        <Route index path="/reading" element={<Reading />}/>
        <Route index path="/blog" element={<Blog />}/>
        <Route index path="/:cardId" element={<SingleCard />} />
      </Route>
    )
  )
  return (
    <div className="app">
    <RouterProvider router={router} />
    <Footer />
    </ div>
  )
}

export default App
