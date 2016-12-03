import React, { PropTypes } from 'react';
import BlogCard from '../component/BlogCard';


let data=[
  {index:1,title:'lalala',desc:'hahaha'},
  {index:2,title:'lalala',desc:'hahaha'},
  {index:3,title:'lalala',desc:'hahaha'}
]
class Blog extends React.Component {

  render () {
    let cards = data.map( (item,i) => <BlogCard {...item} key={i} /> )
    return (
      <div className='blog-wrap'>
        {cards}
      </div>
    )
  }
}

export default Blog;
