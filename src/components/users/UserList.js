import React, { Component } from 'react';
import { connect } from "react-redux";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { fetchAuthors,deleteAuthor } from "../../actions"
import { Modal } from '../Modal';
import { Portal } from '../Portal';


class UserList extends Component {
    state={
        showModal:false
    }
    componentDidMount() {
        this.props.fetchAuthors();
    }

    // deleteAuthor = (props, id, event) => {
    //     props.history.push(`/users/delete/${id}`)
    // }
    editAuthor = (props, id) => {
        props.history.push(`/users/edit/${id}`)
    }
    handleDeleteAuthor = () => {
        this.setState({
            showModal: !this.state.showModal
        })
        this.props.deleteAuthor(this.props.match.params.id);
    };
    handleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
        // this.props.history.replace("/")
    }
    render() {
        const classes = {}
        if (!this.props.authors.length) {
            return <div>Loading...</div>;
        }
        return (
            <React.Fragment>
                <Container maxWidth="lg">
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4" className={classes.title}>
                            User List
                </Typography>
                        <div className={classes.demo}>
                            <List>
                                {
                                    this.props.authors.map((user, index) => (<ListItem key={index}>
                                        <Link to={`/users/${user.id}`} className={classes.link}>{user.name}</Link>
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" aria-label="delete" onClick={(e) => this.editAuthor(this.props, user.id, e)}>
                                                <EditIcon />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="delete" onClick={()=>this.handleModal()} >
                                                <DeleteIcon />
                                            </IconButton>
                                        </ListItemSecondaryAction>
                                    </ListItem>))
                                }
                            </List>
                        </div>
                        <Button variant="contained" color="primary">
                            <AddIcon>Add</AddIcon></Button>
                    </Grid>
                </Container>
                <Portal>
                {this.state.showModal ? <Modal
                    toggleModal={() => this.handleModal()}
                    deleteAuthor={() => this.handleDeleteAuthor()}
                /> : null}
                </Portal>

            </React.Fragment>
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