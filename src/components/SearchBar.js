import React from "react"

class SearchBar extends React.Component {
state = {search: ''}


  render() {
    let onInput =() => {
    this.setState(this.state.search)
    }
    return <div>
      <form>
        <label>Search for videos here</label>
        <input onInput={onInput}/>
      </form>
    </div>
  }
}

export default SearchBar
