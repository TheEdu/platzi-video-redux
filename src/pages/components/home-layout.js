import React from 'react'
import './home-layout.css'

function HomeLayout(props) {
    return (
        <section className="HomeLayout">
            {/* <h1> HomeLayout </h1> */}
            {/* Render all childrens */}
            { props.children }
        </section>
    )
}

export default HomeLayout