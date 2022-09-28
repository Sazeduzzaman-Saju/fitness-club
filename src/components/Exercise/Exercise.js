import React from 'react';
import './Exercise.css'

const Exercise = ({ exercise }) => {
    const { picture, age, name, about, time } = exercise;
    return (
        <div>
            <div className="card">
                <img className='img-fluid exercise-image' src={picture} alt="" />
                <div class="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{about.slice(0, 35)}...</p>
                    <h6 className="card-text extra-text">For Age: {age}</h6>
                    <h6 className="card-text extra-text">Time Required: {time} M<i class="fa-duotone fa-clock text-primary"></i></h6>
                </div>
                <a href="/#" className="exercise-button">Add To List</a>
            </div>
        </div>
    );
};

export default Exercise;