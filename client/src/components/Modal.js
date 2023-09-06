import { useState } from 'react'
import { useCookies } from 'react-cookie'

const Modal = ({ mode, setShowModal, getData, task }) => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const editMode = mode === 'edit' ? true : false

  const [data, setData] = useState({
    user_email: editMode ? task.user_email : cookies.Email,
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : 20,
    date: editMode ? task.date : new Date()
  }) 

  const postData = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/properties/`,{
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.status === 200){
        console.log('WORKED')
        setShowModal(false)
        getData()
      }
    } catch(err){
      console.error(err)
    }
  }


  const editData = async (e) => {
    e.preventDefault()
    try{
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/properties/${task.id}`,{
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      if (response.status === 200){
        console.log('WORKED')
        setShowModal(false)
        getData()
      }
    } catch(err){
      console.error(err)
    }
  }

  
  const handleChange = (e) => {
    console.log('CHANGING !!', e)
    const { name, value} = e.target
    setData(data => ({
      ...data,
      [name] : value
    }))

    console.log("toto", data)
  }

    return (
      <div className="overlay">
        <div className="modal">
          <div className="from-title-container">
            <h3> Let's {mode} your task</h3>
            <button onClick={() => setShowModal(false)}>x</button>
          </div>
          <form>
            <input 
              required
              maxlenght={30}
              placeholder="Your task go here"
              name="title"
              value={data.title}
              onChange={handleChange}
            />
            <br/>
            <input 
              required
              type="range"
              min="0"
              max="100"
              name="progress"
              value={data.progress}
              onChange={handleChange}
            />
            <input className={mode} type="submit" onClick={editMode ? editData : postData}/>
          </form>
        </div>
      </div>
    )
  }
  
  export default Modal
  