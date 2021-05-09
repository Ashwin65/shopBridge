import { Button, Divider} from 'antd';
export const columns = (deleteItem, editItem) => {
  
  return (
    [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'itemName',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
      {
          title: 'Stock Left',
          dataIndex: 'stockLeft',
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
                      onClick={() => editItem(record)}
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
