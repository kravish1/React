import React,{Component} from 'react';
import Interactors from '../interactors/interactors';
import LeftPane from '../leftpane/leftpane';

class Navigation extends Component {
//callback to pass the selected question to the wrapper component
  questionCallback(val,index){
    this.props.callbackFromWrapper(val,index);
  }
//Callback to pass the search text to the wrapper component
  filterCallback(val){
    this.props.callbackFromWrapperForFilter(val);
  }



  render(){
    return(
      <div id="navigation">
      //Consists of the Search Box and link to the Question Form
        <Interactors callbackFromNav={this.questionCallback.bind(this)}
          callbackFromNavForFilter={this.filterCallback.bind(this)}/>
      //Displays the question list
        <LeftPane questionList={this.props.questionList} callbackFromNav={this.questionCallback.bind(this)} />
      </div>
    );
  }
}

export default Navigation;
