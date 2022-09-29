
import User from '../../img/user-profile.jpg';

const Cart = ({ cart }) => {




    let totalTime = 0;
    for (const exercise of cart) {
        totalTime = totalTime + exercise.time
    }

    const addBreak = () => {
        alert('button clicked')
    }
    return (
        <div>
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
                        <p className='mb-0'>75<sub>KG</sub></p>
                        <p>Weight</p>
                    </div>
                    <div className='col text-center'>
                        <p className='mb-0'>75<sub>KG</sub></p>
                        <p>Weight</p>
                    </div>
                </div>
                <h4 className='ms-4 ms-4'>Add A Break</h4>
                <div className='d-flex mt-3  user-info'>
                    <button onClick={addBreak} type="button" className="btn btn-floating select-button ms-3" >
                        05m
                    </button>
                    <button onClick={addBreak} type="button" className="btn btn-floating select-button ms-3"  >
                        15m
                    </button>
                    <button onClick={addBreak} type="button" className="btn btn-floating select-button ms-3" >
                        20m
                    </button>
                    <button onClick={addBreak} type="button" className="btn btn-floating select-button ms-3" >
                        25m
                    </button>
                </div>
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
                        <p className='pt-3'>200 Minuit</p>
                    </div>
                </div>
                <button className='activity-btn'>Activity Complete</button>
            </div>
        </div>
    );
};

export default Cart;