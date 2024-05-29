import React from 'react'
import shekil from '../../img/maxresdefault.jpg'
import ayxan from './card.module.css'

function Card({data}) {

  console.log(data);

  return (
    <div className={ayxan.card} >
        <img src={shekil} alt=".." />
        <h3>{data}</h3>
        <p>Creating React cards</p>

    </div>
  )
}

export default Card