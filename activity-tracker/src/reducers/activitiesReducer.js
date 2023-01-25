import {v4 as uuidv4} from "uuid";
const initalState = [
    {
        id:1,
        name:"running",
        duration:"1 hour"
    }
];

const activitiesReducer = (state=initalState, action) =>{
    const {type, payload} = action;
    switch (type) {
        case "CREATE_ACTIVITY":
            return [...state, {
                id:uuidv4(),
                name:payload.name,
                duration:payload.duration
            }]
    case"DELETE_ACTIVITY":
    const copyState = [...state];
    return copyState.filter((activity) => activity.id !== payload.id);
        default:
            return state;
    }
}

export default activitiesReducer;