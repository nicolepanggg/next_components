import { useState } from "react";


export default function Carousel({ children: slides }) {
    const [curr, setCurr] = useState(0);

    const prev = () => setCurr((curr)=>(curr==0? slides.length-1:curr-1));
    const next = () => setCurr((curr)=>(curr==slides.length-1? 0:curr+1));



    return (
        <div className="carousel">
            <div className="flex transition-transform ease-out duration-500" style={{transform:`translateX(-${curr*100}%)`}}>
                {slides.map((i) => (<img src={i} />))}
            </div>
            <div className="arrow">
                <button onClick={prev}>
                    <img src="left.png"/>
                </button>
                <button onClick={next}>
                    <img src="right.png" sizes/>
                </button>
            </div>
        </div>
    );
}