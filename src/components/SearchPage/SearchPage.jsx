import React from 'react';
import { Component, Fragment } from 'react';
import { MDBInput, MDBContainer, MDBForm } from 'mdbreact'
import { connect } from 'react-redux'
import { getSearchResult } from '../../store/actions/search'
import { toast } from 'react-toastify';
import SearchResult from '../Search/SearchResult';

class SearchPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: props.match.params.search || '',
            searched: !!props.match.params.search || false
        }
    }

    componentDidMount() {
        if (this.state.search)
            this.onSubmit()
    }

    onChange = (e) => {
        if (!e.target.value)
            this.setState({ searched: false })
        this.setState({ search: e.target.value })
    }

    onSubmit = (e) => {
        if (e)
            e.preventDefault();
        if (this.state.search) {
            this.setState({ searched: true })
            this.props.history.push(`/search/${this.state.search}`)
            this.props.getSearchResult(this.state.search)
        } else {
            this.setState({ searched: false })
            toast.error("Задайте поисковое поле!")
        }
    }

    render() {
        const { tags, instructions, answers, faq, articles } = this.props
        return <MDBContainer>
            <form onSubmit={(e) => this.onSubmit(e)}>
                <MDBInput icon="search" hint="Введите запрос" onChange={(e) => this.onChange(e)} value={this.state.search} />
            </form>
            {this.state.searched ?
                <Fragment>
                    <div>
                        <h2>Результаты поиска по запросу - "{this.state.search}"</h2>
                    </div>
                    <SearchResult link={`/search/${this.state.search}`} tags={tags} instructions={instructions} answers={answers} faq={faq} articles={articles} />
                </Fragment>
                : null}
        </MDBContainer>
    }
}

const mapStateToProps = (state) => {
    return {
        instructions: state.search.searchData.instructions ?? [],
        articles: state.search.searchData.articles ?? [],
        faq: state.search.searchData.faq ?? [],
        answers: state.search.searchData.answers ?? [],
        tags: state.search.searchData.tags ?? [],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSearchResult: (payload) => dispatch(getSearchResult(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);