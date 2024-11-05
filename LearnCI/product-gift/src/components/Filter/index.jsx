import React from 'react'
import Select from '../Select'
import SearchIcon from '../../icons/SearchIcon'
import Bars from '../../icons/Bars';
import './style.css';

const Filter = () => {
  return (
    <div className="filterComponent">
        <h1>Mục yêu thích của bạn.</h1>
        <div className="searchInput">
            <SearchIcon />
            <input type="text" value="Tìm kiếm" />
        </div>
        <div className="listSelect">
            <Select />
            <Select />
            <Select />
            <Bars />
        </div>
    </div>
  )
}

export default Filter
