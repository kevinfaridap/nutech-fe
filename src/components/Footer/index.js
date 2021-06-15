import React from 'react'
import style from './footer.module.css'

function index() {
  return (
    <div className={style["footer"]}>
      <div className="container">
        <div className="row">
          <p className="copyright">2021 NuTech Shop. All Right Reserved</p> 
          <p className="contact ml-auto">contact@nutech.com</p>   
        </div>
      </div>    
    </div>
  )
}

export default index
