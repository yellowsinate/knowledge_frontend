import { Component } from "react";
import { connect } from "react-redux";
import { getSearchByTagsAndModel } from '../../store/actions/tags'
import Pagination from "../Pagination/Pagination";

class SearchTagPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tag: props.match.params.tag,
            model: props.match.params.model,
            page: +props.match.params.page || 1,
            baseUrl: `${process.env.REACT_APP_API_HOST}/tags/search/${props.match.params.tag}/${props.match.params.model}`,
        }
        this.onChangePage = this.onChangePage.bind(this);
    }
    
    onChangePage(page) {
        this.setState({ page: page }, () => {
            this.getResultForPage();
        })
    }

    getResultForPage() {
        this.props.history.push(`/tags/search/${this.state.tag}/${this.state.model}/${this.state.page}`);
        this.props.getSearchByTagsAndModel({ page: this.state.page, tag: this.state.tag, model: this.state.model })
    }

    render() {
        return <div>
            {this.props.data.map((el) => {
                return <p>{el?.header || el?.text}</p>
            })}
            <Pagination onChangePage={this.onChangePage} url={this.state.baseUrl} page={this.state.page} count={this.props.count} limit="3" />
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.tags.searchModel ?? [],
        count: state.tags.searchModelCount ?? [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchByTagsAndModel: (payload) => dispatch(getSearchByTagsAndModel(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchTagPage)