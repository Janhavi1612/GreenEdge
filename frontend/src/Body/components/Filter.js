import React from 'react'
import ReactDOM from 'react-dom';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, PageHeader} from 'antd';
import RangeSlider from './Slider';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Zone', 'sub1', <AppstoreOutlined />, [
    getItem('Underage', '1'),
    getItem('Low Income', '2'),
    getItem('option 3', '3')]),
    getItem('Organization', '7'), 
    getItem('Current EVSE', '4')
];
const Filter = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <div>
      <PageHeader title="Filter" subTitle="Please select filters"/>
      <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
      multiple="true"
      selectable="false"
    />
    </div>
    
  )
}

export default Filter
