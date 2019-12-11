import React from 'react';
import Proptypes from 'prop-types';

const Dialog = props => {
    const { userId, handleInput, connectToChatkit, email } = props;
    console.log("dialog: ", email);
    return (
    <div className="dialog-container">
        <div className="dialog">
        <form className="dialog-form" onSubmit={connectToChatkit}>
            <label className="username-label" htmlFor="username">
            Choose a chatroom nickname
            </label>
            <input
            id="username"
            className="username-input"
            autoFocus
            type="text"
            name="userId"
            value={userId}
            default={email}
            onChange={handleInput}
            placeholder={"Please type nickname here"}
            />
            <button type="submit" className="submit-btn">
            Submit
            </button>
        </form>
        </div>
    </div>
    );
};

Dialog.propTypes = {
    userId: Proptypes.string.isRequired,
    handleInput: Proptypes.func.isRequired,
    connectToChatkit: Proptypes.func.isRequired,
};

export default Dialog;