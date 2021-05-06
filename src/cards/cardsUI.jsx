import React from 'react';
import './card-style.css';

const Card = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image 1" className="card-img-top height-10"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Patricia Lebsack</h4>
                <p className="card-text text-secondary">@Karianne</p>
                <a href="www.nothing.com">http://kale.biz</a>
                <br></br>
                <a href="www.nothing.com" className="btn btn-primary">MORE DETAILS</a>
            </div>
        </div>
    );
}

export default Card