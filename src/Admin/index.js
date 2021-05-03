import React from 'react';
import {columns2} from '../constants';
import {Card , Table} from 'antd';
import 'antd/dist/antd.css';


const AdminPortal = () => {

    const locale1 = {
        emptyText: (
          <p>
            No requests so far <br></br>
          </p>
        ),
      };

    return (
        <>
          <>
            <Card
              className="content_card"
              title={<h1 className="page_title">REQUESTS FOR ACCOUNT MANAGER</h1>}
            >
              <>
                {/* <Row>
                  <Col offset={20} lg={24}>
                    <Dropdown
                      overlay={menu}
                      onVisibleChange={this.handleVisibleChange}
                      visible={this.state.visible1}
                    >
                      <Button type="primary">
                        {this.state.current} <Icon type="down" />
                      </Button>
                    </Dropdown>
                  </Col>
                </Row> */}
                <br></br>
              </>
              <Table
                columns={columns2}
                // dataSource={this.props.superadmin}
                locale={locale1}
                pagination={false}
                className="organisations_table"
              />
            </Card>
          </>
        </>
      );
}

export default AdminPortal;