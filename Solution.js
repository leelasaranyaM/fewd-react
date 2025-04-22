import React from 'react';

class Solution extends React.Component {
  add(a, b) {
    return a + b;
  }

  render() {
    const { a, b } = this.props;
    return (
      <div>
        {this.add(a, b)}
      </div>
    );
  }
}

export default Solution;
