import React from "react";

const Card = ({pokes = []}) => {
    
    let id = 0
    let url = ''
    

    return(
        <div className="container">
        <div className="row">
            {   pokes.map((item, index) =>   {
           
                if(item.url.length === 37){
                    id = item.url.substring(34,36)   
                }

                else { 
                    id = item.url.substring(34,37)   
                }

                url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                return  <div key={index} className="col">   
                <div className="card" style={{minWidth: "200px"}}>  
                    <img src={url} alt=""></img>
                    <div className="card-doby"> 
                        <h3 className="card-title text-center text-capitalize">{item.name}</h3>
                    </div>
                   
                    </div>
            </div>
               
                 
            })}
            
        
        </div>
            </div>
    );
}


export default Card