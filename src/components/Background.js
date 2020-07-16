import React, { Component } from 'react';
import { Dimensions } from 'react-native';

import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
} from 'react-native-svg';

class Background extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.screenWidth = Math.round(Dimensions.get('window').width);
        this.screenHeight = Math.round(Dimensions.get('window').height);
    }

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const {screenHeight, screenWidth} = this;
        return (
            <Svg height={'100%'} width={'100%'} style={{ position: 'absolute'}} >
        <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0" stopColor='#5B86E5' stopOpacity="1" />
            <Stop offset="1" stopColor='#36D1DC' stopOpacity="0.6" />
          </LinearGradient>
        </Defs>
        <Rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#grad)"
        />
      </Svg>
        )
    }
}

export default Background;