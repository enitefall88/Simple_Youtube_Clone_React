import React from "react"

class SearchBar extends React.Component {
state = {search: ''}

  onFormSubmit = (event) => {

  }

  render() {

    return <div>
      <form>
        <label>Search for videos here</label>
        <input onChange={e => this.setState({search: e.target.value})}/>
      </form>
      {console.log(this.state)}
     </div>
  }
}

export default SearchBar
