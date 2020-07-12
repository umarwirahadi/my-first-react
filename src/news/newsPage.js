import React, { Component } from 'react';
import { Fragment } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class newsPage extends Component {




    async componentDidMount() {
        await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=49519f79b6ae41dfa2b999161f225169')
            .then(response => {
                //console.log(response.data.articles)
                this.props.getnNewsFromAPI(response.data.articles)

                // this.setState({ dataArtikel: response.data.articles })
                // console.log(response.data)
            })
    }


    render() {
        const { dataArtikel } = this.props
        const listArtikel = dataArtikel.map((itm, ind) => {

            return (
                <div className="row" key={ ind }>
                    <div className="col-md-4">
                        <div className="card my-4 box-shadow">
                            <img className="card-img-top" data-src="" alt="Thumbnail [100%x225]" src={ itm.urlToImage } data-holder-rendered="true" style={ { height: '225px', width: '100 %', display: 'block' } } />
                            <div className="card-body">
                                <p className="card-text">{ itm.title }</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div>
                                    <small className="text-muted">{ itm.publishedAt }</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )

        })

        const noArtikel =
            <div className="container mt-4">
                <div className="alert alert-danger" role="alert">
                    <h4 className="alert-heading">we are sory..!</h4>
                    <p className="mb-0">saat ini tidak ada berita yang bisa ditampilkan, silahkan kunjungi web ini beberapa saat lagi, terimakasih.</p>
                </div>
            </div>

        return (
            <Fragment>
                { listArtikel.length != 0 ? listArtikel : noArtikel }
            </Fragment>
        );
    }
}

const mapStoreToProps = (state) => {
    // console.log(state)
    return {
        dataArtikel: state.dataNews

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getnNewsFromAPI: value => dispatch({ type: 'API_GET_NEWS', value })
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(newsPage);