import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './components/List'
import Nav from './components/Nav'
import { Like } from './components/Like'
import { getAll } from './database'

function App() {


  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAll()
      .then(r => setArticles(r))
  }, []);

  return (
    <>
      <Nav />
      {articles.map((e, i) => {
        return (
          <>
            <List id={e.id} title={e.title} created_at={e.created_at} content={e.content} like={e.like} />
            <hr />
          </>
        )
      })}
    </>


  )
}

export default App
