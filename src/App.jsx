import React from 'react';
import './App.css';
import Qmcq from './Q_temps/q_1_mcq';

  // const q_a = [
  //   {
  //     id: 1,
  //     text: "The user interface is intuitive and easy to navigate.",
  //     options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
  //     selectedOption: "",
  //   },
  //   {
  //     id: 2,
  //     text: "The website content is informative and relevant.",
  //     options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
  //     selectedOption: "",
  //   },
  //   {
  //     id: 3,
  //     text: "The overall design of the application is visually appealing.",
  //     options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
  //     selectedOption: "",
  //   },
  // ];
  const App = () => {
    // const question = {
    //   "question": "What is the content on a multiple answered question?",
    //   "options": ["answer 1", "answer 2", "answer 3", "answer 4"],
    // };
  
    const question = {
      'question': "What is the content on a MCQ question?",
      'options': ["answer 1", "answer 2", "answer 3", "answer 4"],
    };

    return (
      <div className="App">
        <Qmcq qa_JSON={question} />
      </div>
    );
  };
  
  export default App;