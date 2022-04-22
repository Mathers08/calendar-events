import {EventAction, EventActionEnums, EventState} from "./types";

const initialState: EventState = {
  guests: [],
  events: []
}

export default function eventReducer(state = initialState, action: EventAction): EventState {
  switch (action.type) {
    case EventActionEnums.SET_GUESTS:
      return {...state, guests: action.payload}
    case EventActionEnums.SET_EVENTS:
      return {...state, events: action.payload}
    default:
      return state;
  }
}