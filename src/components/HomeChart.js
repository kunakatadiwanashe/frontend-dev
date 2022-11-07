import React from 'react'
import "../App.scss";
import DB from "../DB.json";


export const Content = () => {
  return (
    <div>
 
         {
         DB && DB.map( DB => {
            return(
              <div className='singleChart chrt' >
                <h4>{ DB.name }</h4>
                <p>{DB.content}</p>
              </div>
            )
          })
         }
      
    </div>
  )
}

