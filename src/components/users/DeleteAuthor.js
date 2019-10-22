import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteAuthor, fetchAuthor } from "../../actions";
import { Portal } from "../Portal";
import { Modal } from "../Modal";

class DeleteAuthor extends Component {
    state = {
        showModal: true
    }
    componentDidMount() {
        debugger;
        this.props.fetchAuthor(this.props.match.params.id);
    }
    handleDeleteAuthor = () => {
        this.setState({
            showModal: !this.state.showModal
        })
        this.props.deleteAuthor(this.props.match.params.id);
    };
    handleModalClose = () => {
        this.setState({
            showModal: !this.state.showModal
        })
        this.props.history.replace("/")
    }

    renderContent = () => {
        if (!this.props.stream) {
            return "Are you sure you want to delete this stream ?";
        } else {
            return `Are you sure you want to delete the stream with title: ${
                this.props.stream.title
                } ?`;
        }
    };
    render() {

        return (
            <Portal>
                {this.state.showModal ? <Modal
                    toggleModal={() => this.handleModalClose()}
                    deleteAuthor={() => this.handleDeleteAuthor()}
                /> : null}
            </Portal>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        author: state.authors[ownProps.match.params.id]
    };
};
export default connect(
    mapStateToProps,
    {
        deleteAuthor,
        fetchAuthor
    }
)(DeleteAuthor);
