import React from 'react';
import './App.css';
import Q_3 from './Q_temps/q_4_lvlSurvey';

const App = () => {

  const q_a = [
    {
      id: 1,
      text: "The user interface is intuitive and easy to navigate.",
      options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
      selectedOption: "",
    },
    {
      id: 2,
      text: "The website content is informative and relevant.",
      options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
      selectedOption: "",
    },
    {
      id: 3,
      text: "The overall design of the application is visually appealing.",
      options: ["Strongly Agree", "Agree", "Disagree", "Strongly Disagree"],
      selectedOption: "",
    },
  ];

  return (
    <div className="App">
      <Q_3 initialQuestions = {q_a}/>;
    </div>
  );

};

export default App;