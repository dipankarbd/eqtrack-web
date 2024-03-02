import { combineReducers } from 'redux';

import FilterReducer from './filterReducer';
import EventsReducer from './eventsReducer';
import SelectedEventReducer from './selectedEventReducer';
import LoadingReducer from './loadingReducer';
import RefreshedAtReducer from './refreshedAtReducer';

export default combineReducers({
  filter: FilterReducer,
  events: EventsReducer,
  selectedEvent: SelectedEventReducer,
  loading: LoadingReducer,
  refreshedAt: RefreshedAtReducer,
});
