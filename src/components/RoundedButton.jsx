import React from 'react';
import "../css/RoundedButton.css"

const RoundedButton = (props) => {
    const { text, size, color } = props

    const inlineStyle = {
        fontSize: size,
        padding: `calc(0.5 * ${size}) ${size} calc(0.5 * ${size}) ${size}`,
        backgroundColor: color,
        borderRadius: size,
        height: `calc(2 * ${size})`,
        maxHeight: `calc(2 * ${size})`
    }

    return (
        <div className='rounded-button' style={inlineStyle}>
            {text}
        </div>
    );
}

export default RoundedButton;