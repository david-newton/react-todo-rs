import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';

//page specific imports
import NewListForm  from './NewItemForm';
import ListItem from './ListItem';

//actions
import { removeTask, completeTask, completeAll } from './actions/actions';

import { displayAlert } from './thunks/thunks';

//styles
import './ToDoList.css';

const ToDoList = ({ listItems = [], onDeleteClicked, onCompleteClicked, onCompleteAllClicked, onDisplayAlertClicked }) => {
    //TODO - persistor can cause listItems to be undefined/null - should protect against this or remove in memory persisting
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
            {listItems.map(item => <ListItem key={item.data} item={item} onDeleteClicked={onDeleteClicked} onCompleteClicked={onDisplayAlertClicked}/>)}
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
    onDisplayAlertClicked: () => dispatch(displayAlert()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);