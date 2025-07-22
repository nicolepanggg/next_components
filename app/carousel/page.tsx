"use client"
import Carousel from '../components/carousel';

const slides = [
    "img-1.jpg",
    "img-2.jpg",
    "img-3.jpg",
    "img-4.jpg",
];

const carousel = () => {
    return (
        <div className="container mx-auto mt-5">
           <Carousel children={slides}/>
        </div>
    )
}

export default carousel;