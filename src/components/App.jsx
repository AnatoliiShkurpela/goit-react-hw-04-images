import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Wrapper } from './App.styled';

import { Searchbar } from 'components/searchbar/Searchbar';
import { ImageGallery } from 'components/imageGallery/ImageGallery';
import { Modal } from 'components/modal/Modal';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
  };

  showModal = largeImageURL => {
    this.setState({ isShowModal: true, modalImage: largeImageURL });
  };

  closeModal = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    return (
      <Wrapper>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          showModal={this.showModal}
          searchQuery={this.state.searchQuery}
        />
        {this.state.isShowModal && (
          <Modal
            closeModal={this.closeModal}
            modalImage={this.state.modalImage}
          />
        )}
        <ToastContainer autoClose={3000} theme="colored" />
      </Wrapper>
    );
  }
}
