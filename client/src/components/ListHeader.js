import { useState } from "react"
import Modal from "./Modal"
import { ComplexNavbar } from "./Navbar"

const ListHeader = ({ listName, getData }) => {
  const [showModal, setShowModal]  = useState(false)

    return (
      <div>
        <ComplexNavbar />
        <h1>{listName}</h1>
        <div className="button-container">
          <button className="create" onClick={() => setShowModal(true)}>ADD NEW</button>
        </div>
        {showModal && <Modal mode={'create'} setShowModal={setShowModal} getData={getData}/>}
      </div>
    )
  }
  
  export default ListHeader
  
