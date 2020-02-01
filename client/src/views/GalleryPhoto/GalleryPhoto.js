import React, { useEffect } from 'react';
import { Row, Col, Spinner } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getgallery } from '../../js/actions/Gallery';
import Photo from '../../components/Photo/Photo';

const GalleryPhoto = ({ match }) => {
  const userId = match.params.id;
  console.log('TCL: GalleryPhoto ->  match.param.i', match.params.id);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.gallery.loading);
  const gallery = useSelector(state => state.gallery.gallery);
  useEffect(() => {
    dispatch(getgallery(userId));
  }, []);

  return loading ? (
    <Spinner color='primary' />
  ) : (
    <>
      <Row>
        <Col md={2} className='mt-4'>
          <Link to='/'>
            <img
              src={require('../../assets/icons/back.svg')}
              className='fa mt-4'
              alt='back'
            />
          </Link>
        </Col>
        <Col md={10}>
          <h1 className='title'>USER’S PHOTO GALLERY:</h1>
        </Col>
      </Row>
      <Row>
        <Col className='md-form my-3'>
          <Row>
            <Col md={4}>
              <i className='icon-search'></i>
              <input
                className='form-control'
                type='text'
                placeholder='Search'
                aria-label='Search'
              />
            </Col>
            <Col md={4} className='ml-auto'>
              <Row>
                <Col>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Add URL'
                  />
                </Col>
                <Col>
                  <img
                    src={require('../../assets/icons/add.svg')}
                    className='fa mt-2'
                    alt='add user'
                    // onClick={() => setshow(true)}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        {gallery.map(photo => (
          <Photo
            title={photo.title}
            path={photo.path}
            key={photo._id}
            id={photo._id}
            userId={userId}
          />
        ))}
      </Row>
    </>
  );
};

export default GalleryPhoto;
