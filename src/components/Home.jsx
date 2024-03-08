import React from "react";
import './index.css';


function Home() {
    return (
        <div className="home">
            <div className ="container">
                <div class="row align-items-center my-5">

                    <div class="col-lg-7">
                    <img class="img-fluid rounded mb-4 mb-lg-0"
                        src="https://static.wikia.nocookie.net/heroism/images/e/e0/Wright_Anything_Agency.png/revision/latest?cb=20170508034354"
                        alt="waaImage"/>
                    </div>

                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Wright Anything Agency</h1>
                        <p>
                        The Wright Anything Agency is a law office and talent agency specializing in criminal law located near People Park in Los Angeles,
                         with the nearest medical facility being the Hickfield Clinic. The office consists of renowned defense attorney Phoenix Wright, 
                         teenage magician Trucy Wright, and rookie defense attorney Athena Cykes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;