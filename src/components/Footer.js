import React from 'react';

function Footer() {
    return (
        <footer className="text-center py-3" style={{ 
            backgroundColor: '#808080', 
            color: '#fff', 
            position: 'fixed', 
            left: 0, 
            bottom: 0, 
            width: '100%', 
            textAlign: 'center'
        }}>
            &copy; 2024 Nova Real Estate. All rights reserved.
        </footer>
    );
}

export default Footer;
