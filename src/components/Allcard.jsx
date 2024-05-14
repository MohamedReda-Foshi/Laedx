import Card from "./Card";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
function Allcard() {
  return (
    <div className="py-3">
      
        <Slide
          slidesToScroll={1}
          slidesToShow={1}
          indicators={true}
          
          responsive={[
            {
              breakpoint: 1200, // Breakpoint for larger screens
              settings: {
                slidesToShow: 3, // Show 2 slides on larger screens
                slidesToScroll: 1, // Scroll 1 slide at a time
                infinite: true,
                arrows: false,
              },
            },
            {
              breakpoint: 768, // Breakpoint for tablets
              settings: {
                slidesToShow: 2, // Show 1 slide on tablets
                slidesToScroll: 1, // Scroll 1 slide at a time
                infinite: true,
                arrows: false,
              },
            },
            {
              breakpoint: 480, // Breakpoint for mobile devices
              settings: {
                slidesToShow: 1, // Show 1 slide on mobile devices
                slidesToScroll: 1, // Scroll 1 slide at a time
                infinite: true, // Enable infinite looping
                arrows: false, // Hide navigation arrows on mobile
              },
            },
          ]}
        >
          <div>
            <Card/>
          </div>
          <div>
            <Card/>          
          </div>
          <div>
            <Card/>          
          </div>
        </Slide>
      
    </div>
  );
}

export default Allcard;
