import React, { PropTypes } from 'react';
var marked = require('marked');

class Item extends React.Component {
  render () {
    let content =
      this.props.params.title == '0' ? 'Page One' :
      this.props.params.title == '1' ? 'Page Two' :
      this.props.params.title == '2' ? 'Page Three' : 'Page >>> I Dont Konw'
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default Item;
