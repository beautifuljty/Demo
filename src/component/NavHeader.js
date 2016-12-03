import React, { PropTypes } from 'react'

class NavHeader extends React.Component {
  handleBack () {
    this.context.router.goBack();
  }

  render () {
    return (
      <div className='nav-header'>
        <button type="button" className="btn " aria-label="Left Align" onClick={this.handleBack.bind(this)}>
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        </button>
        <h3>Beautiful@{this.props.title}</h3>
        <button type="button" className="btn " aria-label="Left Align">
          <span className="glyphicon glyphicon-remove-circle" aria-hidden="true"></span>
        </button>
      </div>
    )
  }
}
NavHeader.contextTypes = {
  router: React.PropTypes.object
};


export default NavHeader;
