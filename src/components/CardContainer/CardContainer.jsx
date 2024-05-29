import React from 'react'
import Card from '../Card/Card'

function CardContainer() {

  const name = 'React'

  return (
    <div>
        <Card data={name}/>
    </div>
  )
}

export default CardContainer