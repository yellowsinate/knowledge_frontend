import React, { Component } from 'react';
import Tag from '../Tag/Tag';

class TagsCloud extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return this.props.tags.map((item) => {
            return <Tag tag={item}/>
        })
    }
}

export default TagsCloud;