import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { fetchAuthors, deleteAuthor } from "../../actions"
import { Modal } from '../Modal';
import { Portal } from '../Portal';
import Box from '@material-ui/core/Box';


class UserList extends Component {
    state = {
        showModal: false
    }
    componentDidMount() {
        this.props.fetchAuthors();
    }

    editAuthor = (props, id) => {
        props.history.push(`/users/edit/${id}`)
    }
    handleDeleteAuthor = () => {
        this.setState({
            showModal: !this.state.showModal
        })
        this.props.deleteAuthor(this.state.id);
    };
    handleModal = (id) => {
        this.setState({
            showModal: !this.state.showModal,
            id:id
        })
    }
    render() {
        const classes = {}
        if (!this.props.authors.length) {
            return <div>Loading...</div>;
        }
        return (
            <Box pb={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h4" className={classes.title}>
                        User List
                    </Typography>
                    <div className={classes.demo}>
                        <List>
                            {
                                this.props.authors.map((user, index) => (<Fragment key={index}>
                                    <ListItem key={index}>
                                        <Link to={`/users/${user.id}`} className={classes.link}>{user.name}</Link>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" onClick={() => this.handleModal(user.id)} >
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>

                                    </ListItem>
                                    <Divider component="li" />
                                </Fragment>))
                            }
                        </List>
                    </div>

                </Grid>
                <Portal>
                    {this.state.showModal ? <Modal
                        toggleModal={() => this.handleModal()}
                        deleteAuthor={() => this.handleDeleteAuthor()}
                    /> : null}
                </Portal>
            </Box>
        )
    }
}

const mapStateToProps = state => {
    
    return {
        authors: state.authors.authors
    };
};
export default connect(
    mapStateToProps,
    {
        fetchAuthors,
        deleteAuthor
    }
)(UserList);