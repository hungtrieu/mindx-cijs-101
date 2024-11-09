import React from 'react'
import Select from '../Select'
import SearchIcon from '../../icons/SearchIcon'
import Bars from '../../icons/Bars';
import './style.css';

const Filter = () => {

  const status = [
    { label: 'Còn hàng', value: 1 },
    { label: 'Hết hàng', value: 0 }
  ];

  const categories = [
    { label: 'Danh mục 1', value: 1 },
    { label: 'Danh mục 2', value: 2 },
    { label: 'Danh mục 3', value: 3 }
  ];

  return (
    <div className="filterComponent">
        <h1>Mục yêu thích của bạn.</h1>
        <div className="searchInput">
            <SearchIcon />
            <input type="text" value="Tìm kiếm" />
        </div>
        <div className="listSelect">
            <Select text="Trạng thái" options={status} />
            <Select text="Danh mục" options={categories} />
            <Select text="Sắp xếp" />
            <Bars />
        </div>
    </div>
  )
}

export default Filter
