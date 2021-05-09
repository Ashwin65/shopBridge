import React,{useState, useEffect} from "react";
import {useDispatch} from 'react-redux';
import Modal from '../Components/Modal';
import {  Button, Form } from 'antd';
import CreateItemForm from '../Components/CreateItemForm';
import  {createItem} from '../redux/actions/createItemAction'

const CreateItem = (props) => {

  const {isModalOpen = false, value ={}, isEdit=false, setModalState} = props
  

    

    const dispatch = useDispatch();

    const saveItemToStore = (data) =>{
      setModalState(false)        
      dispatch(createItem(data))

    }

    const closeModal = () => {
        setModalState(false)
     
    }


  const showModal = () => {
    setModalState(true)
  };



    return (<>
        <Button type="primary" onClick={showModal}>
        Add a Item
      </Button>
        <Modal modalVisible ={isModalOpen} closeModal = {closeModal} children= {<CreateItemForm closeModal={closeModal} saveItem = {saveItemToStore} value={value} isEdit={isEdit}/>}/>
        </>
    )
}

export default CreateItem;