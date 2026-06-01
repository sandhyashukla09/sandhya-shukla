import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'
import Share from '../../components/SVGs/Share'

const SingleItem = ({ logo, title, link, date, platform, handleIconClick, index, size }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // 3D Tilt effect calculations
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -8; // Max 8deg
        const rotateY = ((x - centerX) / centerX) * 8;
        
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
        <div className='ai-item-wrapper' 
             ref={cardRef} 
             onMouseMove={handleMouseMove} 
             onMouseLeave={handleMouseLeave}
             data-aos="fade-up"
             data-aos-delay={index * 150}
             >
            <div className='ai-item-body'>
                {/* Rotating Animated Border */}
                <div className='border-rotator-container'></div>
                
                <div className='ai-item-head'>
                    <div className='ai-item-logo-container'>
                        <div style={{ backgroundImage: `url(${logo})` }} className='ai-item-logo'></div>
                        <div className='ai-item-logo-glow' style={{ backgroundImage: `url(${logo})` }}></div>
                    </div>
                    
                    <div className='ai-item-status'>
                        <span className='pulse-dot'></span> Verified
                    </div>
                </div>

                <div className='ai-item-content'>
                    <div className='ai-item-title'>{title}</div>
                    <div className='ai-item-platform-badge'>{platform}</div>
                </div>

                <div className='ai-item-footer'>
                    <div className='ai-item-date'>{date}</div>
                    {link && (
                        <div className='ai-item-share' onClick={() => handleIconClick(link)}>
                            <Share width={18} height={18} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

const Certifications = ({ data: {
    heading,
    list,
    handleIconClick
} }) => {
    return (
        <div className='ai-certifications'>
            {/* Soft Particles and Mesh Background */}
            <div className='ai-cert-bg-elements'>
                <div className='mesh-blob blob-1'></div>
                <div className='mesh-blob blob-2'></div>
                <div className='mesh-blob blob-3'></div>
                
                {/* CSS Particles */}
                <div className='particle-field'>
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className={`particle p-${i}`}></div>
                    ))}
                </div>
            </div>

            <div className='container p-3 ai-certifications-container'>
                <ViewsTitle text={heading} />
                
                <div className='ai-certifications-slider-wrapper'>
                    <div className='ai-certifications-slider'>
                        {(list || []).map((item, i) => (
                            <div key={i} className={`slider-item item-${i}`}>
                                <SingleItem {...item} index={i} handleIconClick={handleIconClick} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Certifications.propTypes = {}

export default Certifications