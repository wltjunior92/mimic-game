import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { ReactChild, ReactNode } from "react";

interface CarouselProps {
  children: ReactChild[];
  axis: 'horizontal' | 'vertical';
}

export default function VerticalAdsCarousel({ children, axis }: CarouselProps) {
  return (
    <div>
      <Carousel
        axis={axis}
        interval={10000}
        infiniteLoop
        autoPlay
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        transitionTime={1}
      >
        {children}
      </Carousel>
    </div>
  )
}
