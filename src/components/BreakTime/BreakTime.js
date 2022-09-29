import React from 'react';

const BreakTime = ({ setBreaks }) => {

    return (
        <div>

            <div className='row mt-3 m-2'>
                <div className='col-3'>
                    <button onClick={() => setBreaks(5)} type="button" className="btn btn-floating select-button " >
                        05m
                    </button>
                </div>
                <div className='col-3'>
                    <button onClick={() => setBreaks(10)} type="button" className="btn btn-floating select-button " >
                        10m
                    </button>
                </div>
                <div className='col-3'>
                    <button onClick={() => setBreaks(15)} type="button" className="btn btn-floating select-button " >
                        15m
                    </button>
                </div>
                <div className='col-3'>
                    <button onClick={() => setBreaks(20)} type="button" className="btn btn-floating select-button " >
                        20m
                    </button>
                </div>
            </div>

        </div>
    );
};

export default BreakTime;