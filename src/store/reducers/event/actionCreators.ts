import {IUser} from "../../../types/IUser";
import {EventActionEnums, SetEventsAction, SetGuestsAction} from "./types";
import {IEvent} from "../../../types/IEvent";
import {AppDispatch} from "../../index";

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsAction => ({type: EventActionEnums.SET_GUESTS, payload}),
  setEvents: (payload: IEvent[]): SetEventsAction => ({type: EventActionEnums.SET_EVENTS, payload}),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {

    } catch (e) {
      console.log(e);
    }
  }
}
