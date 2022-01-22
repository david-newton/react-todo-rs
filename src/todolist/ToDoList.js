import React from 'react';
import { connect } from 'react-redux';

//page specific imports
import NewListForm  from './NewItemForm';
import ListItem from './ListItem';

//actions
import { removeTask, completeTask } from './actions/actions';

//styles
import './ToDoList.css';

const ToDoList = ({ listItems = [], onDeleteClicked, onCompleteClicked }) => (
    <div className="todo-list-wrapper">
        <NewListForm />
        {listItems.map(item => <ListItem item={item} onDeleteClicked={onDeleteClicked} onCompleteClicked={onCompleteClicked}/>)}
    </div>
);

const mapStateToProps = state => ({
    listItems: state.todolist,
});

const mapDispatchToProps = dispatch => ({
    onDeleteClicked: data => dispatch(removeTask(data)),
    onCompleteClicked: data => dispatch(completeTask(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);