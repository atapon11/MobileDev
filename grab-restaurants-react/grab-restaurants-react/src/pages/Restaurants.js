import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState ([])
  useEffect(()=>{
      const fetchAllRestaurants = async ()=>{
        try {
          const res = await axios.get("http://localhost:5000/apis/restaurants");
          setRestaurants(res.data)
        } catch (error){
          console.log(error);
        }
      }
      fetchAllRestaurants();
    },[])
  return (
    <div className='constainer'>
    <h1>Grab Restarants</h1>
      <div className='row'>
        <div className='restaurants'>
        {
          restaurants.map((restaurants)=>{
            return(
              <div className='card' key={restaurants.id}>
                <img src={restaurants.imageurl} className='card-img-top' alt=''/>
                <div className='card-body'>
                  <h5 className='title'>{restaurants.name}</h5>
                  <p className='card-text'>{restaurants.type}</p>
                  <Link to="" className="btn btn-danger px-2">Delete
                  </Link>
                  <Link to={"/update/" + restaurants.id}
                  className="btn btn-warning px-2">edit
                  </Link>
                  </div>
                  </div> 
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Restaurants