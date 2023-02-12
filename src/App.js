import './App.css';
import React,{useState} from 'react'

var foodDB = {
  Energy_foods:[
    {name:"Banana",rating:"4.7/5"},
    {name:"Yoghurt",rating:"4.5/5"},
    {name:" Coconut Water",rating:"4.3/5"}
  ],
  Body_building:[
    {name:"Egg",rating:"4.8/5"},
    {name:"salmon",rating:"4.5/5"},
    {name:"chicken-breast",rating:"4.2/5"}
  ],
  Dairy_foods:[
    {name:"milk",rating:"5/5"},
    {name:"butter",rating:"4.6/5"},
    {name:"cheese",rating:"4.4/5"}
  ]
}

var foodObjKey = Object.keys(foodDB)



var headingText = "Food Recommendation App"



 function App(){ 
 
 const[selectedFood,setFood] = useState("Energy_foods")
 
function foodClickHandler(food){
  setFood(food)

}


  return (
    <div className="App">
      <h1>🍔{headingText}</h1>
      <p>Nothing brings people together like good food</p>
      <div className='foodVariety-btn'>

      {
        foodObjKey.map((foodVariety)=>{
          return <button onClick={()=>foodClickHandler(foodVariety)}>
             {foodVariety}
          </button>
        })
      }
      </div>

      <hr />
     <div >
       
     </div>
   
   {
    foodDB[selectedFood].map((food)=>{
      return <div >
        <ul >
<li>
          <div>
          <h2>  {food.name} </h2>

            </div> 
          <div className='food-rating'>
           {food.rating}

          </div>
</li>
        </ul>
        
      </div>
    })
   }

    </div>
    
  );
}

export default App;
