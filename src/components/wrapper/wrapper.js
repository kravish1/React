import React,{Component} from 'react';
import Navigation from '../navigation/navigation';
import RightPane from '../rightpane/rightpane';
import Response from '../response/response';


class Wrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions : [],
      isResponseVisible : false

    }
  }
//Method to Insert Questions
  insertQuestions(data){

    this.state.questions.push(data);
    this.setState({
      questions : this.state.questions
    });
    localStorage.setItem('questions',JSON.stringify(this.state.questions));
  }
//Method to render the clicked question in the Respnse Form
  questionSelect(val,index){
    console.log(val + index);
    this.state.isResponseVisible = val;
    if(index)
      this.state.currentIndex = index;
    this.setState({});
  }
//Method to Resolve a question and remove it
  deleteQuestion(){
    this.state.questions.splice(this.state.currentIndex,1);

    localStorage.setItem('questions',JSON.stringify(this.state.questions));
    this.setState({});
  }
//Method to update the question with responses
  updateQuestion(updatedValue){
    this.state.questions[this.state.currentIndex] = updatedValue;
    this.setState({});
    localStorage.setItem('questions',JSON.stringify(this.state.questions));
  }
//Method to filter the question based on the user search
  filterQuestion(searchText){
    if(searchText){
       clearTimeout(this.timeout);
       this.timeout = setTimeout(() =>{
         this.setState({
           questions : this.state.questions.filter(i => i.subject.indexOf(searchText) !== -1)
         });
       },100);
    }
    else{
      this.setState({
        questions : JSON.parse(localStorage.getItem('questions'))
      });
    }


  }

  render(){
    return (
      <div id='wrapper'>
      {/*Consists of the Search Box and link to the Question Form and displays the question list*/}
        <Navigation questionList={this.state.questions} callbackFromWrapper={this.questionSelect.bind(this)}
        callbackFromWrapperForFilter={this.filterQuestion.bind(this)}/>
        {(this.state.isResponseVisible) ?
        <Response currentQuestion={this.state.questions[this.state.currentIndex]}
         callbackFromWrapper={this.questionSelect.bind(this)}
          callbackDelete={this.deleteQuestion.bind(this)}
          callbackUpdate={this.updateQuestion.bind(this)}/>
           :
        <RightPane callbackFromWrapper={this.insertQuestions.bind(this)}/>
        }

      </div>
    );
  }
}

export default Wrapper;
