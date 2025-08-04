import React from 'react'
import MasonyLayout from '../components/masonry';

const mockItems = [
    { "title": "item1", "imageSrc": "/thumbnails/img-1.jpg", "imageUrl": "/img-1.jpg" },
    { "title": "item2", "imageSrc": "/thumbnails/img-2.jpg", "imageUrl": "/img-2.jpg" },
    { "title": "item3", "imageSrc": "/thumbnails/img-3.jpg", "imageUrl": "/img-3.jpg" },
    { "title": "item4", "imageSrc": "/thumbnails/img-4.jpg", "imageUrl": "/img-4.jpg" },
    { "title": "item5", "imageSrc": "/thumbnails/img-5.jpg", "imageUrl": "/img-5.jpg" },
    { "title": "item6", "imageSrc": "/thumbnails/img-6.jpg", "imageUrl": "/img-6.jpg" },
    { "title": "item7", "imageSrc": "/thumbnails/img-7.jpg", "imageUrl": "/img-7.jpg" },
    { "title": "item8", "imageSrc": "/thumbnails/img-8.jpg", "imageUrl": "/img-8.jpg" },
    { "title": "item1", "imageSrc": "/thumbnails/img-1.jpg", "imageUrl": "/img-1.jpg" },
    { "title": "item2", "imageSrc": "/thumbnails/img-2.jpg", "imageUrl": "/img-2.jpg" },
    { "title": "item3", "imageSrc": "/thumbnails/img-3.jpg", "imageUrl": "/img-3.jpg" },
    { "title": "item4", "imageSrc": "/thumbnails/img-4.jpg", "imageUrl": "/img-4.jpg" },
    { "title": "item5", "imageSrc": "/thumbnails/img-5.jpg", "imageUrl": "/img-5.jpg" },
    { "title": "item6", "imageSrc": "/thumbnails/img-6.jpg", "imageUrl": "/img-6.jpg" },
    { "title": "item7", "imageSrc": "/thumbnails/img-7.jpg", "imageUrl": "/img-7.jpg" },
    { "title": "item8", "imageSrc": "/thumbnails/img-8.jpg", "imageUrl": "/img-8.jpg" },
];


const masonry = () => {
    return (
        <>
            <MasonyLayout items={mockItems} />
        </>
    );
}

export default masonry;