import React from 'react';

function Footer(props) {
    let d=new Date();
    return (
        <div className="foot">

            <h3> Created by Tx-deweloper {d.getFullYear}</h3>
            
        </div>
    );
}

export default Footer;