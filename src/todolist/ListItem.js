import React from 'react';
import './ListItem.css';

const ListItem = ({ item, onDeleteClicked, onCompleteClicked }) => {
    //if item is complete strikeout text and hide complete button
    const itemText = item.isComplete ? <p><del>{item.data}</del></p> : <p>{item.data}</p>
    const completeButton = item.isComplete ? null : 
        <button className="complete-button" onClick={() => onCompleteClicked(item.data)}>
            Task Completed 
        </button>;

    return (
        <div className="item-container">
            <h4>{itemText}</h4>
            <div className="button-container">
                {completeButton}
                <button 
                    onClick={() => onDeleteClicked(item.data)}
                    className="delete-button">Delete</button>
            </div>
        </div>
    );
};

export default ListItem;