import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle'
import Helm from '../../components/SVGs/Helm'
import { useParallax } from 'react-scroll-parallax'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Paragraph = ({ text }) => (
    <div className='ai-myself-paragraph ai-myself-animate'>
        {text}
    </div>
)

const SkillItem = ({ item }) => (
    <div className='ai-myself-skill'>
        {item}
    </div>
)

const List = ({ items }) => (
    <div className='col'>
        {(items || []).map(item => (
            <SkillItem key={item} item={item} />
        ))}
    </div>
)

const ListParent = ({ list1, list2 }) => (
    <div className='ai-myself-list-parent row'>
        <List items={list1} />
        <List items={list2} />
    </div>
)

const MySelf = ({ data: {
    heading,
    paragraphs,
    techList1,
    techList2,
    image,
} }) => {
    const { ref: parallaxRef } = useParallax({
        speed: -20,
        easing: [1, 1.5, 0.5, 2],
        rotate: [0, (360 * 1)],
    });

    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo('.ai-myself-paragraph', 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0, 
                    stagger: 0.15,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 75%",
                    }
                }
            );

            gsap.fromTo('.ai-myself-skill', 
                { opacity: 0, scale: 0.8, y: 20 },
                { 
                    opacity: 1, 
                    scale: 1, 
                    y: 0,
                    stagger: 0.05,
                    duration: 0.5,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: '.ai-myself-list-parent',
                        start: "top 85%",
                    }
                }
            );

            gsap.fromTo('.ai-myself-profile-wrapper',
                { opacity: 0, x: 50, rotate: 5 },
                {
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.ai-myself-profile-wrapper',
                        start: "top 80%",
                    }
                }
            );
        }, containerRef);
        
        return () => ctx.revert();
    }, []);

    return (
        <div className='ai-myself' ref={containerRef}>
            <div
                ref={parallaxRef}
                className='ai-myself-settings-icon'>
                <Helm />
            </div>
            <div className='container'>
                <div className='ai-myself-container'>

                    {/* ── Section heading ── */}
                    <ViewsTitle text={heading} />

                    <div className='row justify-content-center'>

                        {/* ── Left: text content ── */}
                        <div className='col-12 col-md-8'>
                            <div>
                                {(paragraphs || []).map((text, i) => (
                                    <Paragraph
                                        key={i}
                                        text={text}
                                    />
                                ))}

                                {/* ── Skills label ── */}
                                <div className='ai-myself-tech-label'>
                                    Core Tools &amp; Technologies
                                </div>

                                <ListParent
                                    list1={techList1}
                                    list2={techList2}
                                />
                            </div>
                        </div>

                        {/* ── Right: profile image ── */}
                        <div className='col-12 col-md-4 mt-5 mt-md-0'>
                            <div className='ai-myself-profile-wrapper d-flex justify-content-center'>
                                <HoverImage
                                    showFilter
                                    showBorder
                                    imageClassName='ai-myself-profile'
                                    parentClassName='ai-myself-profile-parent'
                                    src={image}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

MySelf.propTypes = {}

export default MySelf