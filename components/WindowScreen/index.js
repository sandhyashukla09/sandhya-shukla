import React from 'react'

const WindowScreen = ({ children, containerClassName, url }) => {
    // Build a display-friendly pseudo-URL from the project title
    const displayUrl = url
        ? `sandhyashukla.dev/${url.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`
        : 'sandhyashukla.dev'

    return (
        <div className={`ai-window-screen ${containerClassName}`}>
            <div className='ai-taskbar'>
                <div className='ai-circles'>
                    <div className='ai-circle ai-circle1' />
                    <div className='ai-circle ai-circle2' />
                    <div className='ai-circle ai-circle3' />
                </div>
                <div className='ai-url'>
                    <div className='ai-url-box'>
                        {displayUrl}
                    </div>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

WindowScreen.propTypes = {}

export default WindowScreen