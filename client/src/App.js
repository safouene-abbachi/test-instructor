import React, { useEffect } from 'react';
import { Container, Spinner } from 'reactstrap';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css"

import store from './js/store/index';
import { getUsers } from './js/actions/User';
import UserList from './views/UserList/UserList';
import GalleryPhoto from './views/GalleryPhoto/GalleryPhoto';

const App = () => {
  useEffect(() => {
    store.dispatch(getUsers());
  }, []);

  const loading = useSelector(state => state.user.loading);

  return loading ? (
    <Spinner
      color='primary'
      style={{ width: '3rem', height: '3rem', display: 'flex' }}
      type='grow'
      className='mx-auto  my-auto'
    />
  ) : (
    <Container className='card ml-auto mr-auto'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <UserList />} />
          <Route exact path={'/gallery/:id'} component={GalleryPhoto} />
        </Switch>
      </BrowserRouter>
    </Container>
  );
};

export default App;
