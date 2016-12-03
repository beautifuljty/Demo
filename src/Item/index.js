import React, { PropTypes } from 'react'

class Item extends React.Component {
  render () {
    let content =
      this.props.params.title == '1' ? 'Page One' :
      this.props.params.title == '2' ? 'Page Two' :
      this.props.params.title == '3' ? 'Page Three' : 'Page >>> I Dont Konw'
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default Item;
