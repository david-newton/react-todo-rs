import React, { useState } from 'react';
import { connect } from 'react-redux';

//Actions
import { createTask } from './actions/actions';

//Style
import './NewItemForm.css';

const NewListForm = ({ todolist, newTaskClicked }) => {
    const [inputVal, setInputVal] = useState('');

    return (
        <div className="new-list-form">
            <input 
                className="new-list-input" 
                placeholder="Enter new Task..."
                type="text" 
                value={inputVal}
                onChange={e => setInputVal(e.target.value)} />
            <button 
                className="new-list-button"
                onClick = {() => {
                    //TODO - validate against duplicate items?
                    newTaskClicked(inputVal);
                    setInputVal('');
                }}>
                    Create New Task
            </button>
        </div>
    );

};

const mapStateToProps = state => ({
    todolist: state.todolist
});

const mapDispatchToProps = dispatch => ({
    newTaskClicked: data => dispatch(createTask(data)),

});

export default connect(mapStateToProps, mapDispatchToProps)(NewListForm);