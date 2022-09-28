import React, { useEffect, useState } from 'react';
import './GymSchedule.css';
import User from '../../img/user-profile.jpg'
import Exercise from '../Exercise/Exercise';

const GymSchedule = () => {
    const [exercises, setExercises] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])
    return (
        <div>
            <section>
                <div className='container mb-5 mt-5'>
                    <div className='row'>
                        <div className='col-lg-8 col-md-8 col-sm-12'>
                            <h1>Fitness Club</h1>
                            <h3>Select's Todays Exercises</h3>
                            <div className='exercises-container'>
                                {
                                    exercises.map(exercise => <Exercise
                                        key={exercise.id}
                                        exercise={exercise}
                                    ></Exercise>)
                                }
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 user-cart'>
                            <div className='user-info'>
                                <div className='d-flex justify-content-center align-items-center pt-4 '>
                                    <div><img className='user-image img-fluid' src={User} alt="" /></div>
                                    <div className='ms-4'>
                                        <p className='mb-0'>Sazeduzzaman</p>
                                        <p className='p-0'><i className="fa-duotone fa-location-dot"></i><span className='ms-2'>Dhaka,Bangladesh</span></p>
                                    </div>
                                </div>
                                <div className='row mt-3 m-4 user-infos'>
                                    <div className='col'>
                                        <p className='mb-0'>75 <sub>KG</sub></p>
                                        <p>Weight</p>
                                    </div>
                                    <div className='col'>
                                        <p className='mb-0'>75<sub>KG</sub></p>
                                        <p>Weight</p>
                                    </div>
                                    <div className='col'>
                                        <p className='mb-0'>75<sub>KG</sub></p>
                                        <p>Weight</p>
                                    </div>
                                </div>
                                <h4 className='ms-4 ms-4'>Add A Break</h4>
                                <div className='d-flex mt-3  user-info'>
                                    <button type="button" className="btn btn-floating select-button ms-3">
                                        05m
                                    </button>
                                    <button type="button" className="btn btn-floating select-button ms-3">
                                        15m
                                    </button>
                                    <button type="button" className="btn btn-floating select-button ms-3">
                                        20m
                                    </button>
                                    <button type="button" className="btn btn-floating select-button ms-3">
                                        25m
                                    </button>
                                </div>
                                <h4 className='ms-4 mt-4'>Exercise Details</h4>
                                <div className='row m-3'>
                                    <div className='exercise-time d-flex justify-content-around align-items-center'>
                                        <p className='pt-3'>Exercise Time</p>
                                        <p className='pt-3'>200 Minuit</p>
                                    </div>
                                </div>
                                <div className='row m-3'>
                                    <div className='exercise-time d-flex justify-content-around align-items-center'>
                                        <p className='pt-3'>Exercise Time</p>
                                        <p className='pt-3'>200 Minuit</p>
                                    </div>
                                </div>
                                <button className='activity-btn'>Activity Complete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GymSchedule;