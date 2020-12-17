import React from 'react';

const UserContext = React.createContext();

const UserConsumer = UserContext.Consumer;

export { UserConsumer };
export default UserContext;