"use client"
import React from 'react';

const ResumePage: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <iframe
                src="/RAditya26_SU.pdf"
                width="80%"
                height="90%"
                style={{ border: 'none' }}
                title="Resume PDF"
            />
        </div>
    );
};

export default ResumePage;