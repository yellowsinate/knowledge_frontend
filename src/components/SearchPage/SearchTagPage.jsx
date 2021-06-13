import { Component } from "react";
import { connect } from "react-redux";
import { getSearchByTags } from '../../store/actions/tags'
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom'
import SearchResult from "../Search/SearchResult";
class SearchTagPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            baseUrl: `${process.env.REACT_APP_API_HOST}/search/`,
            tag: this.props.match.params.tag
        }
    }

    componentDidMount() {
        this.getResultForPage()
    }

    getResultForPage() {
        this.props.history.push(`/tags/search/${this.state.tag}`);
        this.props.getSearchByTags({ tag: this.state.tag })
    }

    render() {
        return <MDBContainer>
            <h3>Результат выдачи по тегу - "{this.state.tag}"</h3>
            <SearchResult link={`/tags/search/${this.state.tag}`} instructions={this.props.instructions} answers={this.props.answers} articles={this.props.articles} faq={this.props.faq} />
        </MDBContainer>
    }
}

const mapStateToProps = (state) => {
    return {
        instructions: state.tags.searchData.instructions ?? [],
        articles: state.tags.searchData.articles ?? [],
        faq: state.tags.searchData.faq ?? [],
        answers: state.tags.searchData.answers ?? [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchByTags: (payload) => dispatch(getSearchByTags(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTagPage)