export default function Features (props){
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
    

const cakes = props.data.map((cake)=>{
   
    return(
        <div className="cake">
            <figure className="cake__img-wrapper">
                <img className="cake__img" src={cake.img} alt={`${cake.title} picture`}/>
            </figure>
            <div className="cake__title" >
           {cake.title}
            </div>
            <div className="cake__rating">
            
            {stars(cake.rating)}
            <div> 
                <p>({cake.rating})</p>
            </div>
           
            </div>
            
          
                {cake.salePrice?
                <div className="cake__price"><span className="cake__price-sale">${cake.cost}</span><span>${cake.salePrice}</span></div>
                
                :
                <div className="cake__price"><span>${cake.cost}</span></div>}

           
        </div>
    )
})



    return (
        <section id='features'>
<div className="container">
    <div className="big-row">
    <h2>Featured <span className="neon-blue">Cakes</span></h2>
    <div className="cakes-container">
        {cakes}
    </div>
    </div>
</div>
    </section>
    )

    }