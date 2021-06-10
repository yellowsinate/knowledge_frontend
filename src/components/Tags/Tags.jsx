import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import TagsCloud from './TagsCloud/TagsCloud';
import { getTags } from '../../store/actions/tags'
import './Tags.css'

class Tags extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getTags();
        console.log(this.props.tags)
    }

    render() {
        return (
            <div className="tags">
                <h3>Актуальные теги</h3>
                <div className="tagsContainer">
                    <TagsCloud tags={this.props.tags}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tags: state?.tags?.data ?? []
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getTags: () => dispatch(getTags())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Tags);