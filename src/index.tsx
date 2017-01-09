import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Icon } from 'antd';
import './style.less';
import MyIcon from './MyIcon';

interface AppState {
  fileList: any[];
};

class App extends React.Component<any, AppState> {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div>
          <span>antd icon: </span><Icon type="close"/>
        </div>
        <div>
          <span>my icon: </span><MyIcon type="zoomIn"/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);
