

import React from 'react'

const Test = () => {

    const getData = async () => {
        let url = ""
        try {
            let data = await fetch(url)
            let res = await data.json()
            console.log(res)
        } catch (err) {
            console.log("Something went wrong", err)
        }
    }

    return (
        <div className='Test'>
            <h1>Test for API</h1>
            {/* Pass the function reference here */}
            <button onClick={getData}>GET</button>
        </div>
    )
}

export default Test
