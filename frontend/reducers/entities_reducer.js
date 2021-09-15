import { combineReducers } from "redux";
import channelsReducer from "./channels_reducer";
import serversReducer from "./servers_reducer";
import usersReducer from "./users_reducer";
import usersServersReducer from "./users_servers_reducer";
import messagesReducer from "./messages_reducer";
import directMessagesReducer from "./direct_messages_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  servers: serversReducer,
  channels: channelsReducer,
  usersServers: usersServersReducer,
  messages: messagesReducer,
  directMessages: directMessagesReducer
});

export default entitiesReducer;