import React,{Component} from 'react';

class Interactors extends Component {
//metho to show the Question Form
  handleClick(){
    this.props.callbackFromNav(false);
  }
  //Question search handler
  handleSearch(event){
    this.props.callbackFromNavForFilter(event.target.value);
  }
  render(){
    return(
      <div id='interactors'>
        <a href="#" onClick={this.handleClick.bind(this)} className="btn">New question form</a>
        <input type="text" name="search" id="search"
            placeholder="Search questions..." onKeyUp={this.handleSearch.bind(this)} />
      </div>
    );
  }
}

export default Interactors;
