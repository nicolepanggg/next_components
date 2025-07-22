

export default function Carousel({ children: slides }) {
    console.log(slides);
    return (
        <div className="overflow-hidden relative">
            <div className="flex">
                {slides.map((i) => (<img src={i} />))}
            </div>
            <div>
                <button>
                    A
                </button>
                <button>
                    B
                </button>
            </div>
        </div>
    );
}

https://www.youtube.com/watch?v=XJSOgV4VELk