import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    console.log(this.props);
    return (
      <div className='home-wrap'>
        <div className='home-cover'>
          <div className='home-item'>
            <h3>HI,I'M BEAUTIFUL</h3>
            <p>You are beautiful like diamonds in the sky.</p>
            <button type="button" className="btn btn-danger">
              <a href='https://github.com/beautifuljty' style={{color:'#fff'}}>BEAUTIFUL</a>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
