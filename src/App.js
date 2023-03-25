import { useState } from 'react';
import './App.css';
import Box from './component/Box';
// 박스 2개 만들기 ( 타이틀 , 사진 정보 , 결과 값 )
// 가위, 바위 , 보 버튼들 만들기  
// 버튼 클릭 시 클릭한 값이 박스에 보인다.
// 컴퓨터 박스는 랜덤하게 아이템 선택이 된다.
// 누가 이겼는지 승패를 따진다. ( 지면 빨강 , 이기면 파랑 , 비기면 - 검정)

const choice = {
  rock:{
    name:'Rock',
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg"
  },
  scissors:{
    name:'Scissors',
    img:"https://blisgo.com/wp-content/uploads/elementor/thumbs/%EA%B0%80%EC%9C%84-oyeb5p40dpeupf2x00jnasigdktv5fjxrug1rslc00.jpg"
  },
  paper:{
    name:'Paper',
    img:'https://m.economictimes.com/thumb/msid-61941670,width-1200,height-900,resizemode-4,imgsize-25928/better-valuations-of-paper-companies-just-a-matter-of-time.jpg'
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [result1, setResult1] = useState("");

  const play = (userChoise) =>{
    setUserSelect(choice[userChoise]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoise], computerChoice)); 
    setResult1(judgement1(choice[userChoise], computerChoice));
  };

  const judgement = (user, computer) => {
    if(user.name == computer.name) {
      return "tie"
    } else if (user.name == "Rock") {
      return computer.name == "Scissors" ? "win" : "lose"
    } else if (user.name == "Scissors") {
      return computer.name == "Paper" ? "win" : "lose"
    } else if (user.name == "Paper") {
      return computer.name == "Rock" ? "win" : "lose"
    }
  }
  const judgement1 = (user, computer) => {
    if(user.name == computer.name) {
      return "tie"
    } else if (computer.name == "Rock") {
      return user.name == "Scissors" ? "win" : "lose"
    } else if (computer.name == "Scissors") {
      return user.name == "Paper" ? "win" : "lose"
    } else if (computer.name == "Paper") {
      return user.name == "Rock" ? "win" : "lose"
    }
  }
  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체의 키값을 가져와서 배열로 만들어주는 함수다.
    let random = Math.floor(Math.random() * itemArray.length); //랜덤 값 * 배열 후 소수점은 빼준다.
    let final = itemArray[random]; // 0,1,2 중 하나의 배열을 final에 넣어준다.
    return choice[final]; // choice에 랜덤으로 나온 것을 넣어준다.
  }
  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}  />
        <Box title="Computer" item={computerSelect} result={result1}/>
      </div> 
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
