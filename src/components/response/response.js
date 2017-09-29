import React,{Component} from 'react';

class Response extends Component {

//Method to resolve a question
  handleResolve(){
    this.props.callbackDelete();
    this.props.callbackFromWrapper(false);
  }
//Method to add responses to a question
  handleResponse(event){
    event.preventDefault();
    var formElements = event.target.parentNode.childNodes;
    if(formElements[1].value !== '' && formElements[3].value) {
      this.props.currentQuestion.responses.push({name : formElements[1].value,
                                                response : formElements[3].value});
      this.props.callbackUpdate(this.props.currentQuestion);
    }
    formElements[1].value = '';
    formElements[3].value = '';

  }
  render(){
    return(
      <div id='response'>
        <h3>Question</h3>
        <div className='question'>
          <h4>{this.props.currentQuestion.subject}</h4>
          <p>{this.props.currentQuestion.question}</p>
        </div>

        <div className='resolve-container'>
          <a href='#' onClick={this.handleResolve.bind(this)} className='resolve btn'>Resolve</a>
        </div>

        <div className='responses'>
          <h3>Responses</h3>
          {(!this.props.currentQuestion.responses) ? <p>No responses yet.</p> :
              this.props.currentQuestion.responses.map((resp,i) => <div className='response' key={i}>
                <h4>{resp.name}</h4>
                <p>{resp.response}</p>
              </div>)
          }

        </div>
        <br />
        <h3>Add Response</h3>
        <form className='cf' id='response-form'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' placeholder='Name'/>

            <label htmlFor='response'>Response</label>
            <textarea rows='5' cols='40' name='response'></textarea>

            <button onClick={this.handleResponse.bind(this)} className='btn'>Submit</button>
        </form>

      </div>
    );
  }
}

export default Response;
