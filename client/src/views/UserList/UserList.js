import React, { Fragment, useState } from 'react';
import { Container, Row, Col, Spinner } from 'reactstrap';
import { useSelector } from 'react-redux';

import './UserList.css';
import User from '../../components/User/User';
import AddUser from '../../components/Modals/AddUser';

const UserList = () => {
  const [show, setshow] = useState(false);

  const users = useSelector(state => state.user.users);
  const loading = useSelector(state => state.user.loading);
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='title'>Users List:</h1>
        </Col>
        <Col className='md-form my-3'>
          <Row>
            <Col md={6}>
              <i className='icon-search'></i>
              <input
                className='form-control'
                type='text'
                placeholder='Search'
                aria-label='Search'
              />
            </Col>
            <Col md={4}>
              <img
                src={require('../../assets/icons/person-add.svg')}
                className='fa mt-2'
                alt='add user'
                onClick={() => setshow(true)}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>
          <h5>Name:</h5>
        </Col>
        <Col>
          <h5>Sur Name:</h5>
        </Col>
        <Col>
          <h5>Birth Year:</h5>
        </Col>
        <Col>
          <h5>Birth Place:</h5>
        </Col>
        <Col>
          <h5>Action:</h5>
        </Col>
      </Row>

      {loading ? (
        <Spinner color='primary' />
      ) : (
        users.map(user => (
          <Fragment key={user._id}>
            <hr />{' '}
            <User
              name={user.name}
              surName={user.surName}
              birthPlace={user.birthPlace}
              birthYear={user.birthYear}
              id={user._id}
            />
            <hr />
          </Fragment>
        ))
      )}

      <AddUser isOpen={show} toggle={() => setshow(false)} />
    </Container>
  );
};

export default UserList;
