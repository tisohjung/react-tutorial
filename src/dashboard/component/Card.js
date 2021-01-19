import React, {Component, useEffect} from 'react';

import classes from './Card'

class Card extends Component { // PureComponent for complete props check
    // useEffect(() => {
    //     console.log('[Card.js] useEffect');
    //     const timer = setTimeout(() => {
    //         alert('Saved data');
    //     }, 1000);
    //     return () => {
    //         console.log('[Card] cleanup');
    //         clearTimeout(timer);
    //     }
    // }, []);


    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextProps.isLoading === this.props.isLoading) {

    //     }
    // }
}