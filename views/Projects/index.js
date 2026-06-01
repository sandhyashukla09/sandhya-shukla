import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import WindowScreen from '../../components/WindowScreen'
import HoverImage from '../../components/HoverImage'
import ViewsTitle from '../../components/ViewsTitle';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const WindowImage = ({ src }) => (
    <HoverImage
        showFilter
        imageClassName='ai-image'
        src={src}
    />
)

const getSide = (index) => index % 2 ? 'left' : 'right'

const TechChip = ({ tech, isLast }) => (
    <span className='ai-projects-tech-chip'>
        {tech}
        {!isLast && <span className='ai-projects-tech-sep'>·</span>}
    </span>
)

const SingleProject = (props) => {
    const { image, index } = props
    const side = getSide(index);
    return (
        <div className='ai-projects-single'>
            <div className='row align-items-center'>
                {/* Desktop browser mockup */}
                <div className='col-6 d-none d-lg-block'>
                    <WindowScreen
                        containerClassName={`ai-projects-image-container ai-projects-image-container-${side}`}
                        url={props.title}
                    >
                        <WindowImage src={image} />
                    </WindowScreen>
                </div>
                {/* Text content */}
                <div className={`col-12 col-lg-6 d-flex align-items-center ${side === 'right' ? 'order-first' : ''}`}>
                    <ProjectTextSide {...props} />
                </div>
            </div>
        </div>
    )
}

const ProjectTextSide = (props) => {
    const { label, title, description, techs, index, image } = props
    const side = getSide(index);
    const num = String(index + 1).padStart(2, '0');

    return (
        <div className={`ai-projects-text-side ai-projects-text-side-${side}`}>
            {/* Project number */}
            <div className='ai-projects-text-num'>
                {num}
            </div>

            {/* Category label */}
            <div className='ai-projects-text-featured'>
                {label}
            </div>

            {/* Project title */}
            <div className='ai-projects-text-title'>
                {title}
            </div>

            {/* Glassmorphism description card */}
            <div className='ai-projects-text-description'>
                {description}

                {/* Mobile inline browser preview */}
                <div className='mt-4 d-block d-lg-none'>
                    <WindowScreen
                        containerClassName='ai-text-image-container'
                        url={title}
                    >
                        <WindowImage src={image} />
                    </WindowScreen>
                </div>
            </div>

            {/* Tech stack */}
            <div className='ai-projects-text-tecs'>
                {techs.map((tech, i) => (
                    <TechChip
                        key={i}
                        tech={tech}
                        isLast={i === techs.length - 1}
                    />
                ))}
            </div>
        </div>
    )
}

const Projects = ({ data: {
    heading,
    list
} }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const projects = gsap.utils.toArray('.ai-projects-single');
            projects.forEach((project, i) => {
                const side = getSide(i);
                
                // Animate the entire project block
                gsap.fromTo(project, 
                    { opacity: 0, y: 100 },
                    { 
                        opacity: 1, 
                        y: 0, 
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: project,
                            start: "top 80%",
                        }
                    }
                );
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className='ai-projects' ref={containerRef}>
            <div className='container'>
                <div className='ai-projects-container'>
                    <ViewsTitle text={heading} />
                    <div className='row justify-content-center'>
                        {(list || []).map((project, i) => (
                            <SingleProject
                                key={i}
                                index={i}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

Projects.propTypes = {}

export default Projects