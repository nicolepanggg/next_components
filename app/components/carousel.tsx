import { useState} from "react";

interface CarouselProps {
  children: string[];
}

export default function Carousel({ children: slides }: CarouselProps) {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="carousel">
      <div className="scroll-bar" style={{ transform: `translateX(-${curr * 100}%)` }}>
        {slides.map((src, index) => (
          <img key={index} src={src} alt={`slide-${index}`} />
        ))}
      </div>
      <div className="arrow">
        <button onClick={prev}>
          <img src="left.png" alt="Previous" />
        </button>
        <button onClick={next}>
          <img src="right.png" alt="Next" />
        </button>
      </div>
    </div>
  );
}
