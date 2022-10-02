import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Lazyload from 'react-lazyload';
import { showModal } from '../redux/imageModal';

function PhotoItem({ photo: { urls, alt } }) {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(showModal({ src: urls.full, alt }));
  };

  return (
    <ImageWrap>
      <Lazyload offset={500}>
        <Image src={urls.small + '&t=' + new Date().getTime()} alt={alt} onClick={openModal} />
      </Lazyload>
    </ImageWrap>
  );
}

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
`;

const Image = styled.img`
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default PhotoItem;
