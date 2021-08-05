import React from "react"

class SearchBar extends React.Component {
state = {search: ''}
onChange = (event) => {
  this.setState({search: event.target.value})
}
  onFormSubmit = (event) => {

  }

  render() {

    return <div className="search-bar ui segment">
      <form className="ui form">
        <div className="field">
        <label>Search for videos here</label>
        <input type="text" onChange={this.onChange}/>
         </div>
      </form>
      {console.log(this.state)}
     </div>
  }
}

export default SearchBar
