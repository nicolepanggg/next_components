import React from 'react'
import MasonaryLayout from '../components/masonary';

const mockItems = [
    { "title": "item 1", "src": "/thumbnails/img-1.jpg", "url": "/img-1.jpg" },
    { "title": "item 2", "src": "/thumbnails/img-2.jpg", "url": "/img-2.jpg" },
    { "title": "item 3", "src": "/thumbnails/img-3.jpg", "url": "/img-3.jpg" },
    { "title": "item 4", "src": "/thumbnails/img-4.jpg", "url": "/img-4.jpg" },
    { "title": "item 5", "src": "/thumbnails/img-5.jpg", "url": "/img-5.jpg" },
    { "title": "item 6", "src": "/thumbnails/img-6.jpg", "url": "/img-6.jpg" },
    { "title": "item 7", "src": "/thumbnails/img-7.jpg", "url": "/img-7.jpg" },
    { "title": "item 8", "src": "/thumbnails/img-8.jpg", "url": "/img-8.jpg" },
    { "title": "item 1", "src": "/thumbnails/img-1.jpg", "url": "/img-1.jpg" },
    { "title": "item 2", "src": "/thumbnails/img-2.jpg", "url": "/img-2.jpg" },
    { "title": "item 3", "src": "/thumbnails/img-3.jpg", "url": "/img-3.jpg" },
    { "title": "item 4", "src": "/thumbnails/img-4.jpg", "url": "/img-4.jpg" },
    { "title": "item 5", "src": "/thumbnails/img-5.jpg", "url": "/img-5.jpg" },
    { "title": "item 6", "src": "/thumbnails/img-6.jpg", "url": "/img-6.jpg" },
    { "title": "item 7", "src": "/thumbnails/img-7.jpg", "url": "/img-7.jpg" },
    { "title": "item 8", "src": "/thumbnails/img-8.jpg", "url": "/img-8.jpg" },
];


const masonary = () => {
    return (
        <>
            <MasonaryLayout items={mockItems} />
        </>
    );
}

export default masonary;