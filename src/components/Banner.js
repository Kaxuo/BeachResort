import React from 'react';

// for single room mainly , what will be displayed inside the banneer when rendered ?(title, subtitle, children = others stuff )
function Banner({children, title, subtitle}) {
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div />
            <p> {subtitle}</p>
            {children}
        </div>
    )
}

export default Banner;
