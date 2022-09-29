import User from '../../img/user-profile.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'
import { useEffect, useState } from 'react';
import BreakTime from '../BreakTime/BreakTime';


const Cart = ({ cart }) => {
    const [breaks, setBreaks] = useState(0);

    
    useEffect(() => {
        localStorage.setItem('break', breaks);
    }, [breaks])

    useEffect(() => {
        const times = document.getElementById('break-time');
        const convertTimes = times.target;
        console.log(convertTimes)
        localStorage.setItem(times, setBreaks)
    }, [breaks])


    let totalTime = 0;
    for (const exercise of cart) {
        totalTime = totalTime + exercise.time
    }

    const diffToast = () => {
        toast.success("Activity Complete Successfully!",
            {
                position: 'top-right'
            });
    }
    return (
        <div className='sticky-column'>
            <div className='user-info'>
                <div className='d-flex justify-content-center align-items-center pt-4 '>
                    <div><img className='user-image img-fluid' src={User} alt="" /></div>
                    <div className='ms-4'>
                        <p className='mb-0'>Sazeduzzaman</p>
                        <p className='p-0'><i className="fa-duotone fa-location-dot"></i><span className='ms-2'>Dhaka,Bangladesh</span></p>
                    </div>
                </div>
                <div className='row mt-3 m-4 user-infos'>
                    <div className='col text-center'>
                        <p className='mb-0'>75 <sub>KG</sub></p>
                        <p>Weight</p>
                    </div>
                    <div className='col text-center'>
                        <p className='mb-0'>6.5</p>
                        <p>Height</p>
                    </div>
                    <div className='col text-center'>
                        <p className='mb-0'>23<sub>y</sub></p>
                        <p>Age</p>
                    </div>
                </div>
                <h4 className='ms-4 ms-4'>Add A Break</h4>
                <BreakTime setBreaks={setBreaks}></BreakTime>
                <h4 className='ms-4 mt-4'>Exercise Details</h4>
                <p className='ms-4 ms-4'>Selected Exercise: {cart.length} Items</p>
                <div className='row m-3'>
                    <div className='exercise-time d-flex justify-content-around align-items-center'>
                        <p className='pt-3'>Exercise Time</p>
                        <p className='pt-3'>{totalTime} Minuit</p>
                    </div>
                </div>
                <div className='row m-3'>
                    <div className='exercise-time d-flex justify-content-around align-items-center'>
                        <p className='pt-3'>Break Time</p>
                        <p className='pt-3'><span id='break-time'>{breaks}</span> Minuit</p>
                    </div>
                </div>
                <button onClick={diffToast} className='activity-btn'>Activity Complete</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Cart;