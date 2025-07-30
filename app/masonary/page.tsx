import React from 'react'
import dynamic from 'next/dynamic'
import MasonaryLayout from '../components/masonary';

const mockItems = [
    {"content":"item 1", "height":600},
    {"content": "item 1", "height": 200},
    {"content": "item 2", "height": 150},
    {"content": "item 3", "height": 300},
    {"content": "item 4", "height": 250},
    {"content": "item 5", "height": 350}
];

const masonary = () => {
    return (
        <>
            <MasonaryLayout items={mockItems}/>
        </>
    );
}

export default masonary;