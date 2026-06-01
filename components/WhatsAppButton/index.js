import React from 'react';
import WhatsApp from '../SVGs/WhatsApp';

const WhatsAppButton = () => {
    return (
        <div 
            className="ai-whatsapp-floating" 
            onClick={() => window.open('https://wa.me/919826385094', '_blank')}
            title="Chat with me on WhatsApp"
        >
            <WhatsApp width={28} height={28} />
        </div>
    );
};

export default WhatsAppButton;
