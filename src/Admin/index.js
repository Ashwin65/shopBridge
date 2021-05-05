import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {columns2, locale} from '../constants';
import {Card , Table} from 'antd';
import 'antd/dist/antd.css';
import CreateItem from './CreateItem';
import {deleteItem} from '../redux/actions/createItemAction'
import {Message} from '../Components/confirmModal'


const AdminPortal = () => {

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
    console.log("item deleted",record)
  }

  
console.log(tableData)
    return (
        <>
          <>
            <Card
              className="content_card"
              title={<div><h1 className="page_title">LIST OF ITEMS</h1><CreateItem/></div>}
            >
              <>
                <br></br>
              </>
              <Table
                columns={columns2(deleteRecord)}
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