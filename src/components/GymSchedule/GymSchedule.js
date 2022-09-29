import React, { useEffect, useState } from 'react';
import './GymSchedule.css';
import Exercise from '../Exercise/Exercise';
import Cart from '../Cart/Cart';

const GymSchedule = () => {
    const [exercises, setExercises] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, [])

    const handleAddToCart = (exercise) => {
        const newCart = [...cart, exercise];
        setCart(newCart)
    }
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
                                        handleAddToCart={handleAddToCart}
                                    ></Exercise>)
                                }
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 user-cart'>
                            <Cart cart={cart}></Cart>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GymSchedule;