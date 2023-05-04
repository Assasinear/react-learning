import React from 'react';

function NavigationBar(props) {
    const {onNavigate} = props;

    return (
        <nav>
            <ul>
                <li onClick={() => onNavigate('Post 1')}>Post 1</li>
                <li onClick={() => onNavigate('Post 2')}>Post 2</li>
                <li onClick={() => onNavigate('Post 3')}>Post 3</li>
            </ul>
        </nav>
    );
}

export default NavigationBar;