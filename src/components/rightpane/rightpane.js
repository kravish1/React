import React,{Component} from 'react';

class RightPane extends Component {
//Method to submit questions
  handleFormSubmit(event){
    event.preventDefault();
    var element = event.target,
    formElements;
    if(element.nodeName === 'BUTTON'){
      formElements = element.parentNode.childNodes;
      if(formElements[0].value !== '' && formElements[1].value !== '')
      this.props.callbackFromWrapper({subject : formElements[0].value,
                                      question : formElements[1].value,
                                      responses : []});

      formElements[0].value = '';
      formElements[1].value = '';
    }
  }

  render(){
    return(

          <div id='right-pane' onClick={this.handleFormSubmit.bind(this)}>

            <h2>Welcome to <span>Callback Piazza</span>!</h2>
            <p>Enter a subject and question to get started</p>
            <form className='cf' id='question-form'>
              <input type='text' name='subject' placeholder='Subject'/>

              <textarea rows='5' cols='40' name='question' placeholder='Question'></textarea>

            <button className='btn'>Submit</button>
            </form>
          </div>
    );
  }
}

export default RightPane;
