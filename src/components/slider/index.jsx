import { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

// import { SliderData } from '../../data/SliderData';
import Image0 from '../../assets/image/bgs/hero0.jpg';
import Image1 from '../../assets/image/bgs/hero1.jpg';
import Image2 from '../../assets/image/bgs/hero2.jpg';
import Image3 from '../../assets/image/bgs/hero3.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [Image0, Image1, Image2, Image3];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="h-[calc(100vh_-_80px)] relative overflow-hidden w-full">
      <div
        className={`w-[${
          data.length * 100
        }vw] h-full flex transition-all duration-1000 -translate-x-[${
          currentSlide * 100
        }vw]`}
      >
        {data.map((image, i) => (
          <div key={i} className="w-[100vw] h-full">
            <img className="w-full h-full object-cover" src={image} alt="" />
          </div>
        ))}
      </div>
      <div className="flex space-x-10 justify-center absolute left-0 right-0 bottom-[100px] m-auto">
        <div
          className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border border-myWhite bg-slate-100"
          onClick={prevSlide}
        >
          <FaAngleLeft className="text-primary text-2xl" />
        </div>
        <div
          className="w-[50px] h-[50px] flex items-center justify-center cursor-pointer border border-myWhite bg-slate-100"
          onClick={nextSlide}
        >
          <FaAngleRight className="text-primary text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
