import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LobbyPage from './Pages/LobbyPage';
import RoomPage from './Pages/RoomPage';
import UnfoundPage from './Pages/UnfoundPage';

function App() {
  return (
    <>
      <Switch>
        <Redirect from="/" to ="/lobby" exact/>
        <Route path="/lobby" component={LobbyPage} exact/>
        <Route path="/room/:team" component={RoomPage} exact/>
        <Route render={() => <UnfoundPage/>}/>
      </Switch>
    </>
  );
}

export default App;