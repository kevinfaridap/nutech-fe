import React from 'react'
import style from './home.module.css'

function HomeJumbotron() {
  return (
    <div className={[["jumbotron"], ["jumbotron-fluid"], style["home-bg"]].join(' ')}>
      <div className="container">
        <h1 className={style["welcome"]}>Welcome <strong> to Nu</strong>Tech Shop</h1>
        <button className={style["btn-start"]}>Get Started</button>
      </div>
    </div>
  )
}

export default HomeJumbotron
