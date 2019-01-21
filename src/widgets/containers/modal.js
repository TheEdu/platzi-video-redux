import React, { Component } from 'react';
import { createPortal } from 'react-dom';

class ModalContainer extends Component {
    render() {
        const modalContainer = document.getElementById('modal-container')
        const tagsToRender = this.props.children
        return createPortal(
            tagsToRender,
            modalContainer
        )
    }
}

export default ModalContainer;