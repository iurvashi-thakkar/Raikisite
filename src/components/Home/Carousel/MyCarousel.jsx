
import Img1 from '../../../Assets/img1.png';
import Img2 from '../../../Assets/img2.png';
import Img3 from '../../../Assets/img3.png';
import Img4 from '../../../Assets/img4.png';
import Img5 from '../../../Assets/img5.png';
import './MyCarousel.css';
import { useEffect } from 'react';

const MyCarousel = () => {
    let carouselArray;
    useEffect(() => {
        const carouselRef = document.querySelectorAll(".carousel-item");
        carouselArray = [...carouselRef];
    }, []);

    const updateClasses = () => {
        carouselArray.forEach((el) => {
            el.classList.remove("carousel-item-1");
            el.classList.remove("carousel-item-2");
            el.classList.remove("carousel-item-3");
            el.classList.remove("carousel-item-4");
            el.classList.remove("carousel-item-5");
        });

        carouselArray.forEach((el, i) => {
            el.classList.add(`carousel-item-${i + 1}`);
        });
    };

    const goLeft = () => {
        carouselArray.unshift(carouselArray.pop());
        updateClasses();
    };

    const goRight = () => {
        carouselArray.push(carouselArray.shift());
        updateClasses();
    };

    return (
        <div className="carousel">
            <div className="carousel-container">
                <img
                    className={"carousel-item carousel-item-1"}
                    src={Img1}
                    alt="carousel"
                />
                <img
                    className={"carousel-item carousel-item-2"}
                    src={Img2}
                    alt="carousel"
                />
                <img
                    className={"carousel-item carousel-item-3"}
                    src={Img3}
                    alt="carousel"
                />
                <img
                    className={"carousel-item carousel-item-4"}
                    src={Img4}
                    alt="carousel"
                />
                <img
                    className={"carousel-item carousel-item-5"}
                    src={Img5}
                    alt="carousel"
                />
            </div>
            <div className="controls">
                <button onClick={goLeft}>left</button>
                <button onClick={goRight}>right</button>
            </div>
        </div>
    );
};

export default MyCarousel;