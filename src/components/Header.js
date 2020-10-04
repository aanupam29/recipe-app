import React from 'react'

const Header = (props) => {
    const {search, onInputChange, onSearchClick} = props
    return (
        <div className = "jumbotron">
            <h1 className = "display-4 mx-auto">Food Recipe App</h1>
            <br />
            <div className="input-group mb-3 w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Recipe Name" aria-label="Recipe Name" aria-describedby="button-addon2" value={search} onChange={onInputChange} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={onSearchClick}>Search Recipe</button>
                </div>
            </div>
        </div>
    )
}

export default Header
