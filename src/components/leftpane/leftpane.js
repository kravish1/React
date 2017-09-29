import React,{Component} from 'react';

class LeftPane extends Component {
//Handler to select the question and display it in the response form
  handleClick(event){
    var element = event.target,
    key;
    if(element.nodeName === 'DIV' || element.parentNode.nodeName === 'DIV'){
        if(element.nodeName !== 'DIV')
          key = element.parentNode.getAttribute('data');
        else
          key = element.getAttribute('data');
        if(key)
        this.props.callbackFromNav(true,key);
    }
  }

  render(){
    return(
      <div id='left-pane' onClick={this.handleClick.bind(this)}>
        {
          (this.props.questionList.length) ?
            this.props.questionList.map((question,i) =>
              <div className='list-question question-info' key={i} data={i}>
                <h3>{question.subject}</h3>
                <p>{question.question}</p>
              </div>
            )

          :
            <div className='list-question'>
              <p>No questions could be found.</p>
            </div>

        }
      </div>
    );
  }
}

export default LeftPane;
