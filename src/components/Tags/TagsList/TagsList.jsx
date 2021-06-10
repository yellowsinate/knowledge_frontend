import React, { Component } from 'react'
import Pagination from '../../Pagination/Pagination';
import Tag from '../Tag/Tag';

class TagsList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            {this.props.tags.map((item) => {
                return <Tag tag={item} />
            })}
        </div>
    }
}

export default TagsList;