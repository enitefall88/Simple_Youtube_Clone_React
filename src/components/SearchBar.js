import React, {useState} from "react"

let SearchBar = ({onSearchSubmit}) => {
  let [searchTerm, setSearchTerm] = useState('')
  let onSubmit = (event) => {
  event.preventDefault()
  onSearchSubmit(searchTerm)
  }

  return <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
        <label>Search for videos here</label>
        <input type="text" onChange={(event)=> {setSearchTerm(event.target.value)}}/>
         </div>
      </form>
      {console.log(searchTerm)}
     </div>
}

export default SearchBar
