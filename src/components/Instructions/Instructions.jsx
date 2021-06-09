import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getInstructions } from '../../store/actions/instructions'
import InstructionBlock from './instructions_block/instruction_block';

class Instruction extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getInstructions();
  }

  render() {
    return <div>
      {this.props.instructions.map((item) => {
        return <InstructionBlock data={item} />
      })}
      <Link to="/instructions/1">
        <a>Все записи</a>
      </Link>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    instructions: state.instructions.data ?? [],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getInstructions: () => dispatch(getInstructions)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Instruction);