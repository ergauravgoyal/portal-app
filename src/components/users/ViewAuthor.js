import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAuthor } from "../../actions";
import Container from '@material-ui/core/Container';

class ViewAuthor extends Component {
    componentDidMount() {
        this.props.fetchAuthor(this.props.match.params.id);
    }
    render() {
        if (!this.props.author) {
            return <div>Loading...</div>;
        }
        const { address,
            company,
            email,
            name,
            username } = this.props.author;
        return (
            <Container maxWidth="lg">
                <h1>{name} ({username})</h1>
                <p>Works at {company.name}</p>
                <address>
                    Contact <a href={`mailto:${email}`}>{name}</a>. <br />
                    Address: <br />
                    {address.suite}<br />
                    {address.street}<br />
                    {address.city}<br />
                    {address.zipcode}
                </address>
            </Container>
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
    { fetchAuthor }
)(ViewAuthor);


