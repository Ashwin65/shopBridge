import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {columns2, locale} from '../constants';
import {Card , Table} from 'antd';
import 'antd/dist/antd.css';
import CreateItem from './CreateItem';



const AdminPortal = () => {

  const tableData = useSelector(state => state.Items)

  
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
                columns={columns2}
                dataSource={tableData}
                locale={locale}
                pagination={false}
                className="organisations_table"
              />
            </Card>
          </>
        </>
      );
}

export default AdminPortal;