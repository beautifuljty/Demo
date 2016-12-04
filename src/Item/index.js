import React, { PropTypes } from 'react';
var marked = require('marked');
import axios from 'axios';
import Loading from '../component/Loading';
import hljs from 'highlight.js';

class Item extends React.Component {
  constructor(){
    super();
    this.state={
      data:'',
    }
  }
  componentDidMount(){
    let address = this.props.params.title;
    axios.get(`https://raw.githubusercontent.com/beautifuljty/Demo/master/data/${address}.md`)
    .then( res => this.setState({data:res.data}) )
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
        return hljs.highlightAuto(code).value;
      }
    });

    let content = this.state.data.length == 0 ? 'Please Waiting~' : marked(this.state.data);
    // let content =
    //   this.props.params.title == '0' ? 'Page One' :
    //   this.props.params.title == '1' ? 'Page Two' :
    //   this.props.params.title == '2' ? 'Page Three' : 'Page >>> I Dont Konw'
    return (
      <div className='item-wrap'>
        {this.state.data.length == 0 ? <Loading /> :
        <div className='post-wrap' dangerouslySetInnerHTML={{__html:content}}></div> }
      </div>
    )
  }
}

export default Item;
