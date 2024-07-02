// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
import { CarouselWrapper, ImagesContainer, Img, ArrowButton, IndicatorContainer, Indicator } from './styles';

const Carousel = ({ images }) => {
  const [translate, setTranslate] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTranslate(translate + 317 + 65); // 417px width + 65px gap
    }
  };

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTranslate(translate - 317 - 65); // 417px width + 65px gap
    }
  };

  const handleIndicatorClick = (index) => {
    const newTranslate = -index * (317 + 65);
    setCurrentIndex(index);
    setTranslate(newTranslate);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <CarouselWrapper {...handlers}>
      <ArrowButton className="left" onClick={handlePrev}>
        &lt;
      </ArrowButton>
      <ImagesContainer translate={translate}>
        {images.map((src, index) => (
          <Img key={index} src={src} alt={`Imagem ${index + 1}`} />
        ))}
      </ImagesContainer>
      <ArrowButton className="right" onClick={handleNext}>
        &gt;
      </ArrowButton>
      <IndicatorContainer>
        {images.map((_, index) => (
          <Indicator key={index} isActive={currentIndex === index} onClick={() => handleIndicatorClick(index)} />
        ))}
      </IndicatorContainer>
    </CarouselWrapper>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Carousel;
