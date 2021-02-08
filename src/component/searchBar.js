import React from "react";

class SearchBar extends React.Component {
    state = {
        text: ""
    }

    onTypeText = (event) => {
        // console.log(event.target.value);
        this.setState({text: event.target.value});
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        // console.log("got search text of:" + this.state.text);
        this.props.getSearchText(this.state.text);
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="search-box">Search Video</label>
                        <input id="search-box" type="text" value={this.state.text} onChange={this.onTypeText}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;