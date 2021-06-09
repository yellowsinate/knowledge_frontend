import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.module.css';

class Pagination extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page: +this.props.page || 1,
            count: +this.props.count || 0,
            limit: +this.props.limit || 3,
            url: this.props.url
        }
    }

    getHref = (page) => {
        return this.state.url += page
    }

    render() {
        return <div id="react-paginate">
            <ReactPaginate
                pageCount={Math.ceil(this.state.count / this.state.limit)}
                previousLabel='prev'
                nextLabel='next'
                initialPage={this.state.page - 1}
                hrefBuilder={this.getHref}
                breakLabel={'...'}
                marginPagesDisplayed={1}
                pageRangeDisplayed={2}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                activeClassName={'active'}
                onPageChange={(page) => this.props.onChangePage(page.selected + 1)}
            />
        </div>
    }
}

export default Pagination