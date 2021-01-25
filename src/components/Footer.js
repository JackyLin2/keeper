import React from 'react'

function Footer(){

    const today = new Date()
    const year = today.getFullYear();


    return(
        <div> 
            <footer>
                <p> Copyright &#169; {year} </p>
            </footer>
        </div>
    )
}

export default Footer