import React from 'react';
//... 对应下面的点点点
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import NavHeader from './component/NavHeader';
import NavFooter from './component/NavFooter';

class App extends React.Component {
  constructor () {
    super();
    this.state={title:'Home'}
  }
  //...
  getChildContext(){
    return {muiTheme:getMuiTheme()}
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setTitle();
  }
  setTitle(){
    this.setState ({
      title:this.props.router.isActive('/',true) ? 'Home' :
            this.props.router.isActive('blog') ? 'Blog' :
            this.props.router.isActive('work') ? 'Work' :
            this.props.router.isActive('work') ? 'About' : 'Blog'
    })
  }
  render () {
    return(
      <div className='my_wrap'>
        <NavHeader title={this.state.title}/>

        <div className='main'>
          {this.props.children}
        </div>

        <NavFooter />
      </div>
    )
  }
}
// App.contextTypes = {
//   router: React.PropTypes.object
// };
App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired
};
export default App;
