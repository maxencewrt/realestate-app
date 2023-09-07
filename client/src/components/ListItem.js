import { useState } from "react"
import TickIcon from "./TickIcon"
import Modal from "./Modal"
import ProgressBar from "./ProgressBar"
import { Button } from "@material-tailwind/react";

const ListItem = ({task, getData}) => {
  const [showModal, setShowModal] = useState(false) 
  const deleteItem = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/properties/${task.id}`,{
        method: "DELETE",
      })
      if (response.status === 200){
        console.log('WORKED')
        getData()
      }
    } catch(err){
      console.error(err)
    }
  }

    return (
      <li className="list-item">
        <div className="info-container">
          <TickIcon />
          <p className="task-title">{task.title}</p>
          <ProgressBar />
        </div>
        <div className="button-container">
          <Button onClick={() => setShowModal(true)}>EDIT</Button>
          <Button onClick={deleteItem}>DELETE</Button>
        </div>
        {showModal && <Modal mode={'edit'} setShowModal={setShowModal} getData={getData} task={task}/>}
      </li>
    )
  }
  
  export default ListItem
  