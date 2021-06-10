import { Component } from "react";
import { connect } from "react-redux";
import Pagination from "../Pagination/Pagination";
import TagsList from "../Tags/TagsList/TagsList";
import { getSearchByTags } from '../../store/actions/tags'

class SearchTagPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            baseUrl: `${process.env.REACT_APP_API_HOST}/search/`,
            page: +this.props.match.page,
            tag: this.props.match.tag
        }
        this.onChangePage = this.onChangePage.bind(this);
    }

    componentDidMount() {
        console.log(this.props)
        this.getResultForPage();
    }

    onChangePage(page, tag) {
        this.setState({ page: page, tag: tag }, () => {
            this.getResultForPage();
        })
    }

    getResultForPage() {
        if (!this.state.page || this.state.page * 3 > this.props.count) {
            this.setState({ page: 1 })
        }
        this.props.history.push(`/tags/search/${this.state.tag}/${this.state.page}`);
        this.props.getSearchByTags(this.state.page, this.state.tag)
    }

    render() {
        return <div>
            <Pagination onChangePage={this.onChangePage} url={this.state.baseUrl} page={this.state.page} count={this.props.count} limit="20" />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        tags: state.tags.data ?? [],
        count: state.tags.dataCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchByTags: (payload) => dispatch(getSearchByTags(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTagPage)