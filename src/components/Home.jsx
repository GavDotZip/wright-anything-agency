import React from "react";
import './index.css';


function Home() {
    return (
        <div className="home">
            <div className="container">
                {/* First row */}
                <div className="row align-items-center my-5">

                    <div className="col-lg-7">
                        <img className="img-fluid rounded mb-4 mb-lg-0"
                            src="https://static.wikia.nocookie.net/heroism/images/e/e0/Wright_Anything_Agency.png/revision/latest?cb=20170508034354"
                            alt="waaImage"/>
                    </div>

                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Wright Anything Agency</h1>
                        <p>
                            The Wright Anything Agency is a law office and talent agency specializing in criminal law located near People Park in Los Angeles,
                            with the nearest medical facility being the Hickfield Clinic. The office consists of renowned defense attorney Phoenix Wright,
                            teenage magician Trucy Wright, and rookie defense attorney Athena Cykes.
                        </p>
                    </div>
                    
                </div>

                {/* Second row - Carousel */}
                <div className="row my-5">
                    <div className="col-lg-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                {/* Add more list items if you have more images */}
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="..." alt="First slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="..." alt="Second slide"/>
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="..." alt="Third slide"/>
                                </div>
                                {/* Add more carousel items if you have more images */}
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Third row */}
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <h2 className="font-weight-light">Third Row Text</h2>
                        <p>
                            Some text here...
                        </p>
                    </div>

                    <div className="col-lg-5">
                        <img className="img-fluid rounded mb-4 mb-lg-0"
                            src="https://example.com/third-image.png"
                            alt="Third Image"/>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Home;