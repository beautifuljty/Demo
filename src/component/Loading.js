import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class Loading extends React.Component{
  render(){
    return(
      <div style={{textAlign:'center',marginTop:'30vh'}}>
        <CircularProgress size={80} color={'#212121'} thickness={5} />
      </div>
    )
  }
}

export default Loading;
