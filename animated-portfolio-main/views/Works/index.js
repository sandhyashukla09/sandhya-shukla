import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import ViewsTitle from '../../components/ViewsTitle'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TabListItem = ({ text }) => (
    <div className='ai-works-tab-right-list-item'>{text}</div>
)

const Tabs = ({ list }) => {
    const [selectedItemIndex, handleSelectItemIndex] = useState(0);
    const selectedItem = list[selectedItemIndex];
    const rightPanelRef = useRef(null);
    const leftPanelRef = useRef(null);

    useEffect(() => {
        if (rightPanelRef.current) {
            gsap.fromTo(rightPanelRef.current.children, 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }
            );
        }
    }, [selectedItemIndex]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(leftPanelRef.current.children, 
                { opacity: 0, x: -30 },
                { 
                    opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out",
                    scrollTrigger: { trigger: leftPanelRef.current, start: "top 80%" }
                }
            );
        });
        return () => ctx.revert();
    }, []);

    return (
        <div>
            <div className='ai-works-tab'>

                {/* ── Left active-indicator bar ── */}
                <div className='ai-works-left-border'>
                    <div
                        style={{
                            transform: `translateY(${selectedItemIndex * 48}px)`
                        }}
                        className='ai-works-left-border-selection'
                    />
                </div>

                {/* ── Left category nav ── */}
                <div className='ai-works-tab-left' ref={leftPanelRef}>
                    {(list || []).map((item, i) => (
                        <div key={i}>
                            <div
                                onClick={() => handleSelectItemIndex(i)}
                                className={`ai-works-tab-left-button ${selectedItemIndex === i ? 'ai-works-tab-left-button-selected' : ''}`}
                            >
                                {item.company}
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── Right content panel ── */}
                <div className='ai-works-tab-right' ref={rightPanelRef}>
                    {selectedItem && selectedItem.jobs.map((job, jobIdx) => (
                        <div
                            key={`${selectedItemIndex}-${jobIdx}`}
                            className='ai-works-tab-right-card'
                        >
                            {/* Role title */}
                            <div className='ai-works-tab-right-title'>
                                {job.role}{' '}
                                <span className='ai-works-company-name'>
                                    @ {selectedItem.company}
                                </span>
                            </div>

                            {/* Duration badge */}
                            <div className='ai-works-tab-right-duration'>
                                {job.duration}
                            </div>

                            {/* Bullet points */}
                            <div className='ai-works-tab-right-list'>
                                {(job.points || []).map((text, i) => (
                                    <TabListItem key={i} text={text} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

const Works = ({ data: {
    heading,
    experiences,
} }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.ai-works-container',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "power3.out",
                  scrollTrigger: { trigger: containerRef.current, start: "top 75%" }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className='ai-works' ref={containerRef}>
            <div className='container h100per-min100vh d-flex justify-content-center'>
                <div className='ai-works-container'>
                    <ViewsTitle text={heading} />
                    <Tabs list={experiences} />
                </div>
            </div>
        </div>
    )
}

Works.propTypes = {}

export default Works