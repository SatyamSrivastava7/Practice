import {useState} from 'react';
import Model from './Model';
import Backdrop from './Backdrop';

function Todo(props) {
  const [modelIsOpen, setModelIsOpen] = useState(false);
    
  function deleteHandler() {
    setModelIsOpen(true);     
    }
  function closeModelHandler() {
    setModelIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      { modelIsOpen && ( <Model onCancel = {closeModelHandler} onConfirm = {closeModelHandler} />)}
      {modelIsOpen && <Backdrop onCancel = {closeModelHandler}/>}
    </div>
  );
}

export default Todo;
