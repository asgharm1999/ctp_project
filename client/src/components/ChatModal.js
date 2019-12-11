import React, { Component } from 'react';
import Chat from './Chat';


export default class ChatModal extends Component {
    constructor() {
        super();
        this.state = {
            showingModal: false
        };

        this.update(this.props);
    }

    openModal = () => {
        window.$('#chat-modal').modal('show');
    }

    closeModal = () => {
        window.$('#chat-modal').modal('close');
    }

    update = (open) => {
        if (open === true) {
            this.openModal();
        } else if (open === false) {
            this.closeModal();
        }
    }

    componentWillReceiveProps(props) {
        this.update(props.open);
    }

    render() {
        return (
            <div id="chat-modal" className="modal fade" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">
                                <span>&times;</span>
                            </button>
                            <h4 className="modal-title">{this.props.title}</h4>
                        </div>
                        <div className="modal-body">
                            {this.props.children}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger pull-left" data-dismiss="modal">Delete</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>*/}
                        <Chat />
                    </div>
                </div>
            </div>
        );
    }
}