import React, { Component } from 'react';
import { Button, Result } from 'antd';
import 'antd/dist/antd.css';
import history from './history';


export class PageNotFound extends Component {
  /**
   * @description redirects the user back to home page based on the role
   */
  handleClick = () => {
        console.log("handle click")
          history.back();
        }
    


  render() {
    return (
      <>
        <Result
          status={'404'}
          title={'404'}
          subTitle={'Sorry, the page you visited does not exist.'}
          extra={
            <Button
              id="home_button"
              type="primary"
              key="console"
              onClick={this.handleClick}
            >
              Back Home
            </Button>
          }
        />
      </>
    );
  }
}


export default PageNotFound;
