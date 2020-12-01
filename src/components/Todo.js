import React from 'react';

const Todo = props => {
  const handleClick = ()=>{
    props.handleToggle(props.item.id);
  }
  console.log(props);
  return (
    <div onClick={handleClick} className={`todo${props.item.completed ? ' completed' : ''}`}>
      <p>{props.item.task}</p>
    </div>
  );
};

export default Todo;