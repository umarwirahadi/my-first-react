import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import gbr1 from './img/slide1.jpg';
import gbr2 from './img/slide2.jpg';
import gbr3 from './img/slide3.jpg';
const Banner = () => {
    return (
        <Fragment>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className=""></li>
                    <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                    <li data-target="#myCarousel" data-slide-to="2" className="active"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item">
                        <img className="first-slide" src={ gbr1 } alt="First slide" />
                        <div className="container">
                            <div className="carousel-caption text-left">
                                <h1>my example 1.</h1>
                                <p>desc.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="second-slide" src={ gbr2 } alt="Second slide" />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>Another example headline.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><Link className="btn btn-lg btn-primary" to="/" role="button">Learn more</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item active">
                        <img className="third-slide" src={ gbr3 } alt="Third slide" />
                        <div className="container">
                            <div className="carousel-caption text-right">
                                <h1>One more for good measure.</h1>
                                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <p><Link className="btn btn-lg btn-primary" to="/news" role="button">News</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="carousel-control-prev" to="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </Link>
                <Link className="carousel-control-next" to="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </Link>
            </div>
        </Fragment>
    );
}

export default Banner;