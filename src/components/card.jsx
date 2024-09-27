/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import '../assets/scss/Global.scss';

import gsap from 'gsap';

const ProjectCard = ({imageURL}) => {
  const cardRef = useRef(null);

  useEffect(() => {
   
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.2 }
    );
  }, []);

  const handleMouseEnter = () => {
   
    gsap.to(cardRef.current, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    
    gsap.to(cardRef.current, {
      scale: 1,
      duration: 0.3,
      ease: 'power3.out',
    });
  };
  return (
    <div className='Card'
    ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <div className="BackgroundImage" 
      style={{backgroundImage:`url(${imageURL})`}} />
      <div className='CardContent'>
        <div className='Title'>Project Title</div>


        <div className='Description'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iusto obcaecati maxime suscipit provident magni porro dolorem maiores at, repudiandae perferendis consequuntur ipsam sequi consequatur animi vero est laudantium ad nemo corporis.
        </div>
        <div className='Button'href="#">View Project</div>
      </div>
    </div>
  );
};

export default ProjectCard;
