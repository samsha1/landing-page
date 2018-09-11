import React from 'react';
import _ from "lodash";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Game extends React.Component {
  state = {
    selectedNumbers: [],
    numberOfrandomStars: 1 + Math.floor(Math.random() * 9),
    answerIsCorrect: null,
    usedNumbers: [],
    redraws: 5,
    doneStatus: null
  };

  selectNumber = clickedNumber => {
    if (this.state.selectedNumbers.indexOf(clickedNumber) >= 0) {
      return;
    }
    if (this.state.usedNumbers.indexOf(clickedNumber) >= 0) {
      return;
    }
    this.setState(prevState => ({
      answerIsCorrect: null,
      selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };

  resetNumber = clickedNumber => {
    this.setState(
      prevState => ({
        answerIsCorrect: null,
        selectedNumbers: prevState.selectedNumbers.filter(
          number => number !== clickedNumber
        )
      }),
      this.updateDoneStatus
    );
  };

  checkAnswer = () => {
    this.setState(prevState => ({
      answerIsCorrect:
        prevState.numberOfrandomStars ===
        prevState.selectedNumbers.reduce((acc, n) => acc + n, 0)
    }));
  };

  acceptAnswer = () => {
    this.setState(
      prevState => ({
        usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
        answerIsCorrect: null,
        selectedNumbers: [],
        numberOfrandomStars: 1 + Math.floor(Math.random() * 9)
      }),
      this.updateDoneStatus
    );
  };

  refreshStars = () => {
    if (this.state.redraws === 0) { 
      return;
    }
    this.setState(prevState => ({
      redraws: prevState.redraws - 1,
      selectedNumbers: [],
      numberOfrandomStars: 1 + Math.floor(Math.random() * 9),
      answerIsCorrect: null
    }),
     this.updateDoneStatus
    );
  };

  possibleSolutions = ({ numberOfrandomStars, usedNumbers }) => {
    const possibleNumbers = _.range(1, 10).filter(number => usedNumbers.indexOf(number) === -1);
    return possibleCombinationSum(possibleNumbers, numberOfrandomStars);
  };

  updateDoneStatus = () => {
    this.setState(prevState => {
      if (prevState.usedNumbers.length === 9) {
        return { 
          numberOfrandomStars:null,
          doneStatus: "You Win!" };
      }
      if (prevState.redraws === 0 && !this.possibleSolutions(prevState)) {
        return { doneStatus: "Game Over!" };
      }
    });
  };


  playAgain=()=>{
    this.setState(prevState => ({
      selectedNumbers: [],
      numberOfrandomStars: 1 + Math.floor(Math.random() * 9),
      answerIsCorrect: null,
      usedNumbers: [],
      redraws: 5,
      doneStatus: null
    }));

  };



  render() {
    const {
      selectedNumbers,
      numberOfrandomStars,
      answerIsCorrect,
      usedNumbers,
      redraws,
      doneStatus
    } = this.state;
    return (
      <div className="container">
      <br/>
      <div className="row">
      <div className="col-md-12">
        <h3 className="headerTitle">Play Random</h3>
        <hr />
      </div>
      </div>
        <div className="row starButtonAnswer">
          <Stars randomnumberOfStars={numberOfrandomStars} />
          <Button
            selectedNumbers={selectedNumbers}
            checkAnswer={this.checkAnswer}
            answerIsCorrect={answerIsCorrect}
            acceptAnswer={this.acceptAnswer}
            refreshStars={this.refreshStars}
            redraws={redraws}
          />
          <Answer
            selectedNumbers={selectedNumbers}
            resetNumbers={this.resetNumber}
          />
        </div>
        <br />
        <div className="row">
        {doneStatus ? (
          <DoneFrame doneStatus={doneStatus} playAgain={this.playAgain}/>
        ) : (
          <Numbers
            selectedNumbers={selectedNumbers}
            selectNumber={this.selectNumber}
            usedNumbers={usedNumbers}
          />
        )}

        </div>
        <br />
      </div>
    );
  }
}

var possibleCombinationSum = function(arr, n) {
  if (arr.indexOf(n) >= 0) {
    return true;
  }
  if (arr[0] > n) {
    return false;
  }
  if (arr[arr.length - 1] > n) {
    arr.pop();
    return possibleCombinationSum(arr, n);
  }
  var listSize = arr.length,
    combinationsCount = 1 << listSize;
  for (var i = 1; i < combinationsCount; i++) {
    var combinationSum = 0;
    for (var j = 0; j < listSize; j++) {
      if (i & (1 << j)) {
        combinationSum += arr[j];
      }
    }
    if (n === combinationSum) {
      return true;
    }
  }
  return false;
};

const Stars = props => {
  //const numberOfstars=1+Math.floor(Math.random()*9);
  // let stars=[];
  // for (let i=0; i<numberOfstars; i++){
  //  stars.push(<i className="fa fa-star" />);
  // }
  return (
    <div className="col-md-5 col-sm-5 star">
      {
        _.range(props.randomnumberOfStars).map(i => <i className="fa fa-star" key="{i}" />)}
    </div>
  );
};

const Button = props => {
  let button;
  switch (props.answerIsCorrect) {
    case true:
      button = (
        <button className="btn btn-success" onClick={props.acceptAnswer}>
          <i className="fa fa-check" />
        </button>
      );
      break;
    case false:
      button = (
        <button className="btn btn-danger">
          <i className="fa fa-times" />
        </button>
      );
      break;
    default:
      button = (
        <button
          className="btn"
          onClick={props.checkAnswer}
          disabled={props.selectedNumbers.length === 0}
        >
          =
        </button>
      );
      break;
  }
  return (
    <div className="col-md-2 col-sm-2">
      {button}
      <br />
      <br />
      <button
        className="btn btn-warning btn-sm"
        onClick={props.refreshStars}
        disabled={props.redraws === 0}
      >
        <i className="fa fa-check" aria-hidden="true">
          <br />
          {props.redraws}
        </i>
      </button>
    </div>
  );
};

const Answer = props => {
  return (
    <div className="col-md-5 col-sm-5 playSpan resetNum">
      {props.selectedNumbers.map((number, i) => (
        <span key={i} onClick={() => props.resetNumbers(number)}>
          {number}
        </span>
      ))}
    </div>
  );
};

const DoneFrame = props => {
  return (
    <div className="text-center doneFrame">
      <h2>{props.doneStatus}</h2>
      <br/>
      <button className="btn btn-default" onClick={props.playAgain}>Play Again!</button>
    </div>
  );
};

const Numbers = props => {
  //const arrayofNumber=_.range(1,10);
  const numberClassName = number => {
    if (props.usedNumbers.indexOf(number) >= 0) {
      return "used";
    }
    if (props.selectedNumbers.indexOf(number) >= 0) {
      return "selected";
    }
  };
  return (
    <div className="col-12 card text-center listNum">
      <div className="playSpan">
        {Numbers.list.map((number, i) => (
          <span
            key={i}
            className={numberClassName(number)}
            onClick={() => props.selectNumber(number)}
          >
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};

Numbers.list = _.range(1, 10);

class PlayNinePage extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    );
  }
}

// ReactDOM.render(<App />, mountNode);

export default PlayNinePage;
