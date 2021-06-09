import React from 'react';

class InstructionBlock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <h3 >
        {this.props.data.text}
      </h3>
    </div>
  }
}

export default InstructionBlock;