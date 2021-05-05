import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import Modal from '../Components/Modal';
import {  Button } from 'antd';
import CreateItemForm from '../Components/CreateItemForm';
import  {createItem} from '../redux/actions/createItemAction'

const CreateItem = () => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();

    const saveItemToStore = (data) =>{
        setIsModalVisible(false);
        dispatch(createItem(data))

    }

    const closeModal = () => {
        setIsModalVisible(false)
    }


  const showModal = () => {
    setIsModalVisible(true);
  };

    return (<>
        <Button type="primary" onClick={showModal}>
        Add a Item
      </Button>
        <Modal modalVisible ={isModalVisible} closeModal = {closeModal} children= {<CreateItemForm saveItem = {saveItemToStore}/>}/>
        </>
    )
}

export default CreateItem;