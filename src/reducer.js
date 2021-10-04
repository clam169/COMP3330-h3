import * as actions from "./actionTypes";

export default function reducer(state = [], action) {
  if(action.type == "SELECT_COURSE") {
    let updatedState = {...state, course: action.payload.course, description: action.payload.description};
    return updatedState;
  }
}
