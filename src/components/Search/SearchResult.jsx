import React from 'react'
import { Fragment } from "react"
import { Component } from "react"
import { MDBCollapse, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import { Link } from 'react-router-dom'

class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            link: props.link,
            collapseID: '1'
        }
    }

    toggleCollapse = (collapseID) =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        }));

    render() {
        return <Fragment>
            {this.props.articles.length ? <MDBCard className='mt-3'>
                <button
                    tagClassName='d-flex justify-content-between'
                    onClick={() => this.toggleCollapse('1')}
                >
                    Статьи
                    <MDBIcon
                        icon={this.state.collapseID === '1' ? 'angle-up' : 'angle-down'}
                    />
                </button>
                <MDBCollapse id='1' isOpen={this.state.collapseID}>
                    <MDBCardBody>
                        {this.props.articles.map((el) => {
                            return <div>{el.header}</div>
                        })}
                        <div>
                            <Link to={`${this.state.link}/articles/1`}>Просмотреть все</Link>
                        </div>
                    </MDBCardBody>
                </MDBCollapse>
            </MDBCard>
                : null}
            {this.props.instructions.length ? <MDBCard className='mt-3'>
                <button
                    tagClassName='d-flex justify-content-between show'
                    onClick={() => this.toggleCollapse('2')}
                >
                    Инструкции
                    <MDBIcon
                        icon={this.state.collapseID === '2' ? 'angle-up' : 'angle-down'}
                    />
                </button>
                <MDBCollapse id='2' isOpen={this.state.collapseID}>
                    <MDBCardBody>
                        {this.props.instructions.map((el) => {
                            return <div>{el.text}</div>
                        })}
                        <div>
                            <Link to={`${this.state.link}/instructions/1`}>Просмотреть все</Link>
                        </div>
                    </MDBCardBody>
                </MDBCollapse>
            </MDBCard>
                : null}
            {this.props.faq.length ? <MDBCard className='mt-3'>
                <button
                    tagClassName='d-flex justify-content-between show'
                    onClick={() => this.toggleCollapse('3')}
                >
                    FAQ
                    <MDBIcon
                        icon={this.state.collapseID === '3' ? 'angle-up' : 'angle-down'}
                    />
                </button>
                <MDBCollapse id='3' isOpen={this.state.collapseID}>
                    <MDBCardBody>
                        {this.props.faq.map((el) => {
                            return <div>{el.text}</div>
                        })}
                        <div>
                            <Link to={`${this.state.link}/faq/1`}>Просмотреть все</Link>
                        </div>
                    </MDBCardBody>
                </MDBCollapse>
            </MDBCard>
                : null}
            {this.props.answers.length ? <MDBCard className='mt-3'>
                <button
                    tagClassName='d-flex justify-content-between show'
                    onClick={() => this.toggleCollapse('4')}
                >
                    Ответы
                    <MDBIcon
                        icon={this.state.collapseID === '4' ? 'angle-up' : 'angle-down'}
                    />
                </button>
                <MDBCollapse id='4' isOpen={this.state.collapseID}>
                    <MDBCardBody>
                        {this.props.answers.map((el) => {
                            return <div>{el.header}</div>
                        })}
                        <div>
                            <Link to={`${this.state.link}/answers/1`}>Просмотреть все</Link>
                        </div>
                    </MDBCardBody>
                </MDBCollapse>
            </MDBCard>
                : null}
            {this.props.faq.length ? <MDBCard className='mt-3'>
                <button
                    tagClassName='d-flex justify-content-between show'
                    onClick={() => this.toggleCollapse('3')}
                >
                    FAQ
                    <MDBIcon
                        icon={this.state.collapseID === '3' ? 'angle-up' : 'angle-down'}
                    />
                </button>
                <MDBCollapse id='3' isOpen={this.state.collapseID}>
                    <MDBCardBody>
                        {this.props.faq.map((el) => {
                            return <div>{el.text}</div>
                        })}
                        <div>
                            <Link to={`${this.state.link}/faq/1`}>Просмотреть все</Link>
                        </div>
                    </MDBCardBody>
                </MDBCollapse>
            </MDBCard>
                : null}
            {this.props.tags && this.props.tags.length ? <MDBCard className='mt-3'>
                <button
                    tagClassName='d-flex justify-content-between show'
                    onClick={() => this.toggleCollapse('5')}
                >
                    Теги
                    <MDBIcon
                        icon={this.state.collapseID === '5' ? 'angle-up' : 'angle-down'}
                    />
                </button>
                <MDBCollapse id='5' isOpen={this.state.collapseID}>
                    <MDBCardBody>
                        {this.props.tags.map((el) => {
                            return <div>{el.name}</div>
                        })}
                        <div>
                            <Link to={`${this.state.link}/tags/1`}>Просмотреть все</Link>
                        </div>
                    </MDBCardBody>
                </MDBCollapse>
            </MDBCard>
                : null}
        </Fragment>
    }
}

export default SearchResult