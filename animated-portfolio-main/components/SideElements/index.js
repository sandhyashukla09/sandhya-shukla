

import React from 'react'
import WhatsApp from '../SVGs/WhatsApp'

const SideElementsItem = ({ items, position }) => {
    return (
        <div className={`ai-side-elements-container ai-side-elements-${position}`} >
            {(items || []).map((item, i) => (
                <div key={i} className='ai-side-elements-item'>
                    {item}
                </div>
            ))}
            <div className='ai-side-elements-line' />
        </div>
    )
}


const SideElements = ({ data: {
    emailButton,
    handleIconClick,
} }) => {
    return (
        <div className='ai-side-elements'>
            {/* left side  */}
            <SideElementsItem
                position="left"
                items={[
                    <div key="WhatsApp" className="d-flex align-items-center" style={{ gap: '10px', cursor: 'pointer', transform: 'rotate(90deg)', transformOrigin: 'left center', whiteSpace: 'nowrap' }} onClick={() => window.open('https://wa.me/919826385094', '_blank')}>
                        <WhatsApp width={20} height={20} style={{ transform: 'rotate(-90deg)' }} />
                        <span style={{ fontSize: '14px', letterSpacing: '2px' }}>+91 9826385094</span>
                    </div>
                ]}
            />

            {/* right side  */}
            <SideElementsItem
                position="right"
                items={[
                    <div
                        onClick={emailButton?.onClick}
                        key="website" className='ai-side-elements-text'>
                        {emailButton?.label}
                    </div>,
                ]}
            />
        </div>
    )
}

SideElements.propTypes = {}

export default SideElements