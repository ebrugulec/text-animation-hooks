import React, { useState, useRef } from 'react'
import TreeComponent from './TreeComponent'

const TextAnimation = ({ textColor, overlayColor, text }) => {
    const containerRef = useRef(null);
    const [mousePos, setMousePos] = useState({x: 0, y: 0});

    const handleMouseMove = event => {
        event = event.nativeEvent;
        const elem = containerRef.current;
        const newX = (event.offsetX / elem.clientWidth) * 100;
        const newY = (event.offsetY / elem.clientHeight) * 100;
        setMousePos({x: newX, y: newY});
    };

    const handleMouseOut = () => setMousePos({x: 0, y: 0});

    return (
        <section
            className='animatedTextContainer'
            style={{
                "--maskX": mousePos.x,
                "--maskY": mousePos.y
            }}
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
            ref={containerRef}
        >
            <h1
                style={{ color: textColor }}
                className='animatedTextContent'
            >
                {text}
            </h1>
            <h1
                style={{ color: overlayColor }}
                className='animatedTextContentClone'
            >
                {text}
            </h1>
            <TreeComponent />
        </section>
    );
};

export default TextAnimation