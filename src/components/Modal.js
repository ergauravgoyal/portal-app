import React from "react";
import "./modal.css"

export function Modal(props) {
    const {toggleModal, authorname,deleteAuthor } = props;
    return (

        <div className="modal-popup">
            <div className="modal-overlay">
            </div>
            <div className="modal-wrapper" aria-modal="true" aria-hidden="true" role="dialog">
                <div className="modal-content">
                    <span className="close-button" onClick={()=>toggleModal()}><i>X</i></span>
                    <div className="modal-header row">
                        <h3>Delete the Author</h3>
                    </div>
                    <div className="modal-body">
                        <p>Are you sure , you want to delete this author {authorname} ?</p>

                    </div>
                    <div className="modal-footer">
                        <button onClick={()=>deleteAuthor()}>Ok</button>
                        <button onClick={()=>toggleModal()}>Cancel</button>
                    </div>
                </div></div>
        </div>
    );
}
