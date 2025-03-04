import React from 'react'

const BodyCom = ({ name, age, text }) => {
    // console.log(props);
    name === "hello" ? console.log("Hello") : console.log("Not Hello")

    return (
        <div>
            <h1>{text}</h1>
            {
                name === "Hello" &&
                <h1>{name}</h1>
            }
            <h1>{age}</h1>
        </div>
    )
}

export default BodyCom