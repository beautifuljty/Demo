import React, { PropTypes } from 'react';
import {Link} from 'react-router';


class LeftNav extends React.Component {
  render () {
    return (
      <div className='leftnav-wrap'>
        <h3>Beautiful@{this.props.title}</h3>
        <Link to='/' activeStyle={{backgroundColor:' #424242'}} onlyActiveOnIndex={true}>Home</Link>
        <Link to='blog' activeStyle={{backgroundColor:' #424242'}}>Blog</Link>
        <Link to='work' activeStyle={{backgroundColor:' #424242'}}>Work</Link>
        <Link to='about' activeStyle={{backgroundColor:' #424242'}}>About</Link>
      </div>
    )
  }
}

export default LeftNav;
