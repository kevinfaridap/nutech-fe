import React, {useEffect} from 'react'
import style from './home.module.css'
import {useHistory} from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';

function HomeJumbotron() {
  useEffect(()=>{
    Aos.init({duration: 3000})
  }, [])

  const history = useHistory()
  return (
    <div className={[["jumbotron"], ["jumbotron-fluid"], style["home-bg"]].join(' ')}>
      <div className="container">
        <h1 data-aos="fade-down" className={style["welcome"]}>Welcome <strong> to Nu</strong>Tech Shop</h1>
        <button data-aos="fade-up" className={style["btn-start"]} onClick={()=>history.push('/product')}>Get Started</button>
      </div>
    </div>
  )
}

export default HomeJumbotron
