"https://www.youtube.com/watch?v=LYEkguL9PcY"
import ListHeader from  "./components/ListHeader"
import {useEffect} from 'react'

const App = () => {

  const getData = async () => {

    const userEmail='toto@gmail.com'

    try {
      const response = await fetch(`http://localhost:8000/properties/${userEmail}`)
      const json = await response.json()
      console.log(json)
    } catch (err){
      console.error(err)
    }
  }

  useEffect (() => getData, [])


  return (
    <div className="app">
      <ListHeader listName={'Property List'}/>
    </div>
  )
}

export default App
