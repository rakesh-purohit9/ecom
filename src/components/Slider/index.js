import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export const Slider = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={className}>
      <AliceCarousel disableButtonsControls {...props} ref={ref} />
    </div>
  );
});
