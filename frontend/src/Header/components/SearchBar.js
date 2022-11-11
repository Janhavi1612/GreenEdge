import React from 'react'
import 'antd/dist/antd.min.css';
import { Input } from 'antd';
const { Search } = Input;

const onSearch = (value) => console.log(value);

const SearchBar = () => {
  return (
    <div>
      <Search placeholder="Search for area" onSearch={onSearch} enterButton style={{width:"80%"}}/>
    </div>
  )
}

export default SearchBar