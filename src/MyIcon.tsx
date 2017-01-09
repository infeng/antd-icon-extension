import * as React from 'react';
import { Icon } from 'antd';
import classnames from 'classnames';

interface MyIconProps {
  type: string;
}

export default class MyIcon extends React.Component<MyIconProps, any> {
  render() {
    let prefixCls = 'my-icon';
    let myClass = classnames(
      prefixCls,
      `${prefixCls}-${this.props.type}`
    );
    return (
      <Icon
      className={myClass}
      type={this.props.type}
      />
    );
  }
}
