import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';


const ModalComponent = (props) => {
  const {children} = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add a Item
      </Button>
      <Modal title="Add Item" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {children}
      </Modal>
    </>
  );
};
 
export default ModalComponent;