import React from 'react';
import './Gyms.css';
import Banner from '../../img/Hero-girl.png'

const Gyms = () => {
    return (
        <div>
            <section>
                <div className='container mt-5'>
                    <div className='row pt-5 d-flex justify-content-center align-items-center'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <h1 className='exercise-title'>Fitness
                                new generation</h1>
                            <p className='banner-details'>The first "premium light" class fitness club in Dhaka, created for people who value comfort and want to enjoy training in a modern fitness club.</p>
                            <button className='main-button'>Join Now</button>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12  cart-column'>
                            <img className='img-fluid' src={Banner} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gyms;