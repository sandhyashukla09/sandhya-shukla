import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ViewsTitle from '../../components/ViewsTitle';

const ReviewCard = ({ text, clinet, via }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // 3D Tilt calculation
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -12; // Max 12deg tilt
        const rotateY = ((x - centerX) / centerX) * 12;
        
        cardRef.current.style.setProperty("--mouse-x", `${x}px`);
        cardRef.current.style.setProperty("--mouse-y", `${y}px`);
        cardRef.current.style.setProperty("--rotate-x", `${rotateX}deg`);
        cardRef.current.style.setProperty("--rotate-y", `${rotateY}deg`);
    };

    const handleMouseLeave = () => {
        if (!cardRef.current) return;
        cardRef.current.style.setProperty("--rotate-x", `0deg`);
        cardRef.current.style.setProperty("--rotate-y", `0deg`);
    };

    return (
        <div className='ai-review-card-wrapper' 
             ref={cardRef} 
             onMouseMove={handleMouseMove} 
             onMouseLeave={handleMouseLeave}>
            <div className='ai-review-card'>
                {/* Moving light streak inside card */}
                <div className='card-light-streak'></div>
                
                <div className='ai-review-card-header'>
                    <span className='ai-review-badge'>
                        {clinet} <span className='via'>via</span> {via}
                    </span>
                    <div className='quote-icon'>”</div>
                </div>
                <div className='ai-review-card-body'>
                    {text}
                </div>
            </div>
        </div>
    );
};

const Reviews = ({ data: { heading, list } }) => {
    // Quadruple the list to ensure a perfectly seamless infinite marquee scroll
    const marqueeList = [...(list || []), ...(list || []), ...(list || []), ...(list || [])];

    return (
        <div className='ai-reviews'>
            {/* Background Particles & Light Streaks */}
            <div className='ai-reviews-bg-elements'>
                <div className='light-streak streak-1'></div>
                <div className='light-streak streak-2'></div>
                <div className='particle-field'>
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className={`particle p-${i}`}></div>
                    ))}
                </div>
            </div>

            <div className='container'>
                <div className='ai-reviews-container' data-aos="fade-up">
                    <ViewsTitle text={heading} />
                </div>
            </div>
            
            <div className='ai-reviews-marquee'>
                <div className='ai-reviews-marquee-track'>
                    {marqueeList.map((item, i) => (
                        <ReviewCard 
                            key={i}
                            text={item.reivew}
                            clinet={item.clinet}
                            via={item.via}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

Reviews.propTypes = {};

export default Reviews;