import React from 'react';
import { Modal } from 'antd';
import 'antd/dist/antd.css';


const ModalComponent = (props) => {
  const {children, modalVisible, closeModal} = props;


  // const handleOk = () => {
  //   setIsModalVisible(false);
  // };

  // const handleCancel = () => {
  //   setIsModalVisible(false);
  // };

  return (
    <>
      
      <Modal title="Add Item" visible={modalVisible}  onCancel={closeModal}  footer = {null}>
        {children}
      </Modal>
    </>
  );
};
 
export default ModalComponent;