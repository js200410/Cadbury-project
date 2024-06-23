import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const links = [
  "ZNRSHr3b4uA",
  "oOUSDPgfY2M",
  "0_2qR3pwLWo",
  "hQpqr0Trev0",
  "yosyOgJBIVs",
  "ZuC-3x2b1Po",
  "z2JnC9Ir1YA",
  "p7WIeItYmRw",
  "GXp6oCEty-8",
  "ah-7BKjUsNw"
];


const VideoHover = () => {
 
    gsap.registerPlugin(ScrollTrigger)
 
  const videoRefs = useRef([]);

  useEffect(() => {

    videoRefs.current.forEach((iframe) => {
      gsap.from('.moments-video',{
        opacity: 0,
        duration: 1,
        translateY:100,
        stagger:.5,
        scrollTrigger: {
          trigger: '.moments',
          start: "top 40%",
          toggleActions: "play pause resume reset"
          }
      })
      gsap.to('.moments-video',{
        opacity: 1,
        translateY:0,
        duration: 1,
        stagger:.5,
        scrollTrigger: {
          trigger: '.moments',
          start: "top 40%",
          toggleActions: "play pause resume reset"
          }
      })
      if (!iframe) return; // Make sure the iframe element exists

      const handleMouseEnter = () => {
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        gsap.to(iframe, { opacity: 1, duration: 0.5 });
      };

      const handleMouseLeave = () => {
        iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        gsap.to(iframe, { opacity: 0.5,});
      };

      iframe.addEventListener('mouseenter', handleMouseEnter);
      iframe.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup function
      return () => {
        iframe.removeEventListener('mouseenter', handleMouseEnter);
        iframe.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <div className="moments flex flex-wrap gap-[4vw]">
      <h1 className='text-center text-[4vw]'></h1>
    
      {links.map((videoId, index) => (
        <div key={index} className={`w-[30vw] h-[70vh] shadow-purple-900 shadow-2xl moments-video  overflow-hidden border-1 rounded-2xl bg-purple-900 ${index%2==0 ? "-translate-y-[10vh]" : ""}`}>
          <iframe
            ref={(el) => (videoRefs.current[index] = el)}
            width="100%"
            src={`https://www.youtube.com/embed/${videoId}?enablejsapi=1&mute=1&autoplay=1&loop=1&playlist=${videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={`h-[130%] -translate-y-[10vh]`}
          ></iframe>
        </div>
      ))}
    </div>
  );
};

export default VideoHover;
