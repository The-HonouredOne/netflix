import React from 'react'
import './Titlecard.css'
import cards_data from '../../assets/cards/Cards_data'

 const Titlecard=(title, category)=> {


  return (
    <div className='title-cards'>
      <h2>popular on netflix</h2>
      {/* <img src={cards_data} alt="" /> */}
      <div className="card-list">
        {cards_data.map((cards, index)=>{
          return <div className='cards' >
                       <img src={cards.image} alt="" />
            <p>{cards.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}
export default Titlecard
