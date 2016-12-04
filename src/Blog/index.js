import React, { PropTypes } from 'react';
import BlogCard from '../component/BlogCard';

import axios from 'axios';
import Loading from '../component/Loading'

// let data=[
//   {index:1,title:'lalala',desc:'hahaha'},
//   {index:2,title:'lalala',desc:'hahaha'},
//   {index:3,title:'lalala',desc:'hahaha'}
// ]
class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      wait:true
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/beautifuljty/Demo/master/data/blogcard.json ')
    .then( res => this.setState({data:res.data,wait:false}) )
    .catch( err => alert(err) )
  }
  render () {
    // let cards = data.map( (item,i) => <BlogCard {...item} key={i} /> )
    return (
      <div className='blog-wrap'>
        {this.state.wait ? <Loading /> : this.state.data.map( (item,i) => <BlogCard {...item} key={i} /> )}
      </div>
    )
  }
}

export default Blog;
