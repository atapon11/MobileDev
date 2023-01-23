import React,{useState} from 'react'
import AddActivity from '../Components/AddActivity';

const Workout = () => {
    const [add, setAdd] = useState(false);
    const handleClick = () =>{
        setAdd(!add)
    }
  return (
    <div className='workouts-wrapper'>
        <h2>My Workout</h2>
        <button onClick={handleClick}>Add activity</button>
        {add && <AddActivity/>}
    </div>
  )
}

export default Workout
