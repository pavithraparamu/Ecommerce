import React, { useState } from 'react'
import "./Mainpage.css"
const MainPage = (props) => {

    //object is there
    let [product,setProduct]=useState(props.data)
  console.log(props.data);
  
function handleInput(eve){
  let filteredData=props.data.filter((ele,i)=>{
    if(ele.title.toLowerCase().includes(eve.target.value.toLowerCase()))  // chech the cureent element
    return ele
  })
  //  update
  setProduct(filteredData)
}
  return (
    <div >
      <div className='in' > 
        <input type="text" placeholder='enter the product name' onInput={handleInput}/>
      </div>
      <section className='main' >
        {product.map((e,i)=>{
          return<div key={e.id}>
            <img src={e.image} alt="" />
            <h2>title:{e.title}</h2>
            <h1>price:{e.price}</h1>
            <h2>rating:{e.rating.rate}</h2>
            <button>add to cart</button>
          </div>

        })}

      </section>
      
    
      
    </div>
  )
}

export default MainPage
