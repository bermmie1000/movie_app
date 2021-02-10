import React from 'react';
import PropTypes from "prop-types";

const ci = [
  {
    id: 1,
    name:"electric",
    picture: "http://newsworld.co.kr/board/openwysiwyg/uploads/admin/(1)_%EC%82%AC%EC%A7%843_LS%20ELECTRIC%20CI.jpg",
    rating: 5
  },
  {
    id: 2,
    name:"cable",
    picture:"http://www.lscns.co.kr/kr/images/image/signature-kr.png",
    rating: 4.5
  }
];

function Company({arg1, arg2, arg3}){
  return (
    <div>
      <h1>This is {arg1}</h1>
      <img src={arg2} alt={arg1}/>
      The rate is {arg3}
    </div>
  )
}

Company.propTypes={
  arg1: PropTypes.string.isRequired,
  arg2: PropTypes.string.isRequired,
  arg3: PropTypes.number.isRequired
};


function renderCI(list){
  return (
      <Company key={list.id} arg1={list.name} arg2={list.picture} arg3={list.rating} />
  )
}

function App() {
  return (
    <div>
      {ci.map(renderCI)}
    </div>
  );
}

export default App;
