import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

//page specific imports
import NewListForm  from './NewItemForm';
import ListItem from './ListItem';

//actions
import { removeTask, completeTask, completeAll } from './actions/actions';

//styles
import './ToDoList.css';

const ToDoList = ({ listItems = [], onDeleteClicked, onCompleteClicked, onCompleteAllClicked }) => {
    const completeAllButton = 
        listItems.some(item => !item.isComplete) ?
            <Button
                onClick={() => onCompleteAllClicked()} 
                className="complete-all-button">
                    Complete All
            </Button> : null;

    return (
        <div className="todo-list-wrapper">
            <h1 className="form-title">Tasks</h1>
            <NewListForm />
            {listItems.map(item => <ListItem item={item} onDeleteClicked={onDeleteClicked} onCompleteClicked={onCompleteClicked}/>)}
            {completeAllButton}
        </div>
    );
};

const mapStateToProps = state => ({
    listItems: state.todolist,
});

const mapDispatchToProps = dispatch => ({
    onDeleteClicked: data => dispatch(removeTask(data)),
    onCompleteClicked: data => dispatch(completeTask(data)),
    onCompleteAllClicked: () => dispatch(completeAll()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);