import React from "react"
import { useEffect, useState } from "react"

export default function Latest (props){
    
    const [cakeData, setCakedata]= useState(props.data) 
     const [filterCakes, setFilterCakes]= useState('') 
     const [loading, setLoading]= useState(false)
    
    
     function stars(rating){
        if (rating >=4.5 && rating<=4.9 ){
    
            return(
                <div className="cake__stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                </div>
                
            )
    
        }
        else if(rating >=3.9 && rating<=4.4){
            return(
                <div className="cake__stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            )
        }
        else if(rating >=3.4 && rating<=3.8){
            return(
                <div className="cake__stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            )
        }
        else if(rating >=2.9 && rating<=3.3){
            return(
                <div className="cake__stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            )
        }
        else if(rating >=2.4 && rating<=2.8){
            return(
                <div className="cake__stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            )
        }
        else if(rating >=1.9 && rating<=2.3){
            return(
                <div className="cake__stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            )
        }
        else if(rating >=1.4 && rating<=1.8){
            return(
                <div className="cake__stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            )
        }
        else if(rating >=0.9 && rating<=1.3){
            return(
                <div className="cake__stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            )
        }
        else if(rating >=0.1 && rating<=0.8){
            return(
                <div className="cake__stars">
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
            )
        } else{
            return(
                <div className="cake__stars">
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>  
                </div>
             
            )
        }
    
      }
      
  
 

 
    useEffect(()=>{
        if( filterCakes ==="LOW_TO_HIGH"){
           setTimeout(()=>{
            setLoading(pre =>!pre)
           }, 1000)
            const loHiCakes=cakeData.sort((a,b)=> (a.salePrice||a.cost)- (b.salePrice||b.cost)) 
             setCakedata([...loHiCakes])
             
             
               }
        else if(filterCakes=== "HIGH_TO_LOW"){
            setTimeout(()=>{
                setLoading(pre =>!pre)
               }, 1000)
            const hiLoCakes=cakeData.sort((a,b)=> ( b.salePrice||b.cost) - (a.salePrice||a.cost)) 
            setCakedata([...hiLoCakes])
        }
        else if(filterCakes=== "RATING"){
            setTimeout(()=>{
                setLoading(pre =>!pre)
               }, 1000)
            const rateCakes=cakeData.sort((a,b)=> b.rating- a.rating) 
          setCakedata([...rateCakes])
        }


    },[filterCakes])


    
    
 

   
//
  function handlechange (event){
    
    setLoading(pre=> !pre)
    setFilterCakes(event.target.value)
    

  }
//23.58

const cakes = cakeData.map((cake)=>{
     
    return(
        <div className="cake">
            <figure className="cake__img-wrapper">
                <img className="cake__img" src={cake.img} alt={`${cake.title} picture`}/>
            </figure>
            <div className="cake__title" >
           {cake.title}
            </div>
            <div className="cake__rating">
            <div className="cake__stars"> 
            
            </div>
            {stars(cake.rating)}
            <div> 
                <p>({cake.rating})</p>
            </div>
           
            </div>
            
            {cake.salePrice?
                <div className="cake__price"><span className="cake__price-sale">${cake.cost}</span><span className="latest">${cake.salePrice}</span></div>
                
                :
                <div className="cake__price"><span className="latest">${cake.cost}</span></div>}



          
           
        </div>
    )
})






  
      return (
          <section id='latest'>
  <div className="container">
      <div className="big-row">
      <div className="cakes__header">
      <h2 className="latest cake__header--title">All <span className="neon-blue">Cakes</span></h2>
      <select id="filter" onChange={handlechange}>
        <option value="" disabled selected>Sort</option>
        <option value="LOW_TO_HIGH">Price, Low to High</option>
        <option value="HIGH_TO_LOW">Price, High to Low</option>
        <option value="RATING">Rating</option>
      </select>
      </div>
      
      <div className="cakes-container">
      { loading? <i class="fa-solid fa-spinner cakes__loading--spinner"></i> : cakes}
         
      </div>
      </div>
  </div>
      </section>
      )
  
      }