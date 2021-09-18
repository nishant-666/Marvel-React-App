import React, { useState } from 'react';
import { Input } from 'antd';
const { Search } = Input;
export default function SearchComponent({ searchTerm }) {
    return (
        <div>
            <Search
                placeholder="Enter your character Name.."
                style={{ width: 500 }}
                onChange={(e) => searchTerm(e.target.value)}
            />
        </div>
    )
}
