import { Button,Tag, Divider} from 'antd';
export const columns2 = (deleteItem) => {
  
  return (
    [
      {
        title: 'Name',
        dataIndex: 'Name',
        key: 'itemName',
      },
      {
        title: 'Description',
        dataIndex: 'Description',
        key: 'description',
      },
      {
        title: 'Price',
        dataIndex: 'Price',
        key: 'price',
      },
      {
          title: 'Stock Left',
          dataIndex: 'StockLeft',
          key: 'stockLeft',
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (text, record) => (
            <span>
                  <>
                    <Button
                      className="Approve_Button"
                      type="primary"
                      id={record.userId}
                      // onClick={this.Approve}
                    >
                      Edit
                    </Button>
                    <Divider type="vertical" />
                    <Button
                      type="danger"
                      id={record.Name}
                      onClick={() => deleteItem(record)}
                    >
                      Delete
                    </Button>
                  </>
              {record.accountManager === true && (
                <>
                  <Tag color="green">Approved</Tag>
                </>
              )}
              {record.declineForAccountManager === true && (
                <>
                  <Tag color="red">Declined</Tag>
                </>
              )}
            </span>
          ),
        },
  ]
  )

} 


export const locale = {
    emptyText: (
      <p>
        No items Added So far <br></br>
      </p>
    ),
  };
