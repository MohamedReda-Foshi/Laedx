import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


function Slider() {

    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
      ];
  return (
    
      

    <div id="Services"  className=' mx-auto max-w-sm  md:max-w-3xl '>
    <Fade 
    onChange={function noRefCheck(){}}
    onStartChange={function noRefCheck(){}}
    arrows={true}
    
  
  autoplay={true}
  infinite={true}
  indicators={true}
  
  pauseOnHover={true}
  slidesToShow={1}
  slidesToScroll={1}

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
        <div className="each-slide ">
        <div className='max-w-40  sm:max-w-2xl md:max-w-2xl m-auto rounded-xl items-center justify-center overflow-hidden bg-orange-400'>
            <img src={images[0]} alt='1' className='each-slide aspect-ratio w-full  '   />
        </div>
        
        </div>
        <div className="each-slide"  >
       
        <div className='max-w-40 md:max-w-2xl  m-auto rounded-xl items-center justify-center overflow-hidden bg-orange-400'>
            <img src={images[1]} alt='1' className='each-slide aspect-ratio w-full  '   />
        </div>
        </div>
        <div className="each-slide">
        <div className='max-w-40 md:max-w-2xl  m-auto rounded-xl items-center justify-center overflow-hidden bg-orange-400'>
            <img src={images[2]} alt='1' className='each-slide aspect-ratio w-full  '   />
        </div>
        
        </div>
    </Fade>
</div>
  );
};

  
export default Slider;