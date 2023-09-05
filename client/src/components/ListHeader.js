const ListHeader = ({ listName }) => {
  const signOut = () => {
    console.log('signOut')
  }

    return (
      <div className="list-header">
        {listName}
        <div className="button-container">
          <button className="create">ADD NEW</button>
          <button className="signout" onClick={signOut}>SIGNOUT</button>
        </div>
      </div>
    )
  }
  
  export default ListHeader
  
