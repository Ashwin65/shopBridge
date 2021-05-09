import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {columns2, locale} from '../constants';
import {Card , Table} from 'antd';
import 'antd/dist/antd.css';
import Modal from '../Components/Modal';
import {  Button, Form } from 'antd';
import {deleteItem, editItem} from '../redux/actions/createItemAction'
import {Message} from '../Components/confirmModal'
import  {createItem} from '../redux/actions/createItemAction'
import CreateItemForm from '../Components/CreateItemForm';
import EditItemForm from '../Components/EditItemForm'



const AdminPortal = () => {

  const [modalState , setModalState] = useState(false)

  const [value, setValue] = useState()

  const [isEdit, isSetEdit] = useState(false);

  const tableData = useSelector(state => state.Items)

  const dispatch = useDispatch();

  const okayHandler = (record) => {
    dispatch(deleteItem(record))
  }

  const cancelHandler = () => {
    return null;
  }

  const deleteRecord = (record) => {
    
    var title = 'Are you sure want to decline?';
    Message(title,okayHandler, cancelHandler,{}, record);
  }

  const editRecord = (record) => {
    setModalState(true);
    setValue(record)
    isSetEdit(true)
  }

  const saveItemToStore = (data) =>{
    setModalState(false)        
    dispatch(createItem(data))

  }

  const editItemInStore = (data) => {
    dispatch(editItem(data))
    setModalState(false)
  

  }

  const closeModal = () => {

    setModalState(false)
    setValue({})
    isSetEdit(false)
}


const showModal = () => {
  setModalState(true)
};

  
    return (
        <>
          <>
            <Card
              className="content_card"
              title={<div><h1 className="page_title">LIST OF ITEMS</h1>

     <Button type="primary" onClick={showModal}>
        Add a Item
      </Button>
        <Modal modalVisible ={modalState} closeModal = {closeModal} children= { !isEdit? 
        <CreateItemForm closeModal={closeModal} saveItem = {saveItemToStore} />:
        <EditItemForm closeModal={closeModal} saveItem = {saveItemToStore} value={value} isEdit={isEdit} editItem = {editItemInStore}/>
        }/>
      

              
             </div>}
            >
              <>
                <br></br>
              </>
              <Table
                columns={columns2(deleteRecord, editRecord)}
                dataSource={tableData}
                locale={locale}
                pagination={false}
                className="organisations_table"
                pagination={true}
              />
            </Card>
          </>
        </>
      );
}

export default AdminPortal;