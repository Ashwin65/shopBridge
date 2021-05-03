import React from 'react';
import {columns2, locale} from '../constants';
import {Card , Table} from 'antd';
import 'antd/dist/antd.css';
import CreateItem from './CreateItem';



const AdminPortal = () => {

  

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
                // dataSource={this.props.superadmin}
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