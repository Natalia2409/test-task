import React from 'react'

function Main(props = "") {
    console.log(props.location.name)
    return (
        <div className="border">
            <div className="backArea main">
                <h2>Hello{(props.location.name) ? `, ${props.location.name}` : ""}</h2>
            </div>
        </div>
    )
}

export default Main;
