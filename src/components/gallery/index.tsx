import React, { Component } from 'react';

import Header from './header';
import ImageGrid from './imageGrid';

class Gallery extends Component {
    render() {
        return (
            <div>
                <Header />
                <ImageGrid />
            </div>
        );
    }
}

export default Gallery;
