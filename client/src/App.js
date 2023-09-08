"https://www.youtube.com/watch?v=LYEkguL9PcY"
import ListHeader from "./components/ListHeader"
import ListItem from "./components/ListItem"
import Auth from "./components/Auth"
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { ComplexNavbar } from "./components/Navbar"
import { SidebarWithLogo } from "./components/Sidebar"
import { FooterWithSocialLinks } from "./components/Footer"

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const authToken = cookies.AuthToken
  const userEmail = cookies.Email
  const [tasks, setTasks] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/properties/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (authToken) {
      getData()
    }
  }
    , [])


  console.log(tasks)

  //Sorted by date 
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date))

  return (

    <div className="app">
      {!authToken && <Auth /> }

      {authToken && (
    <div className="flex"> 
        <SidebarWithLogo />
      <div className="flex-1"> {/* Utilisez flex-1 pour occuper l'espace restant */}
        <ComplexNavbar />
        <ListHeader listName={'Property List1'} getData={getData} />
        {sortedTasks?.map((task) => (
          <ListItem key={task.id} task={task} getData={getData} />
        ))}
        <FooterWithSocialLinks />
      </div>
    </div>
  )}
    </div>
  )
}

export default App
