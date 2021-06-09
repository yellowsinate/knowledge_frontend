import React from 'react';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux'
import { getInstructions } from '../../../store/actions/instructions'
import Pagination from '../../Pagination/Pagination';
import InstructionBlock from '../instructions_block/instruction_block';

class InstructionsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            baseUrl: `${process.env.REACT_APP_API_HOST}/instructions/`,
            page: 1,
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        this.getInstructionsForPage();
    }

    onChangePage(page) {
        this.setState({ page: page }, () => {
            this.getInstructionsForPage();
        })
    }
    
    getInstructionsForPage() {
        if (!this.state.page || this.state.page * 3 > this.props.count) {
            this.setState({page: 1})
        }
        this.props.history.push(`/instructions/${this.state.page}`);
        this.props.getInstructions(this.state.page)
    }

    render() {
        return <div>
            {this.props.instructions.map((item) => {
                return <InstructionBlock data={item} />
            })}
            <Pagination onChangePage={this.onChangePage} url={this.state.baseUrl} page={this.state.page} count={this.props.count} limit="3" />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        instructions: state.instructions.data ?? [],
        count: state.instructions.dataCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInstructions: (payload) => dispatch(getInstructions(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstructionsPage);