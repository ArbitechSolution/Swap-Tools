import React from 'react'
import './AllPool.css'
import Line from '../AllPool/Assets/line.svg'

function DetailPage() {
    return (
        <>
            <div className='container'>
                <div className='col-md-12 text-white'>
                    <div className="d-flex justify-content-end m-5">
                        View on BscScan &nbsp;<i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                </div>
                <div className="col-md-12 text-white D-text">
                    <i class="fa-regular fa-circle-question"></i> <i class="fa-regular fa-circle-question"></i> &nbsp; TRX /WBNB
                </div>
                <div className='row text-white mt-3'>
                    <div className='col-md-6'>
                        <div className="d-flex flex-row mt-3 align-self-center bd-highlight">
                            <div className="p-2 bd-highlight"><i class="fa-regular fa-circle-question"></i> &nbsp; 1 TRX = 0.0002 WBNB   </div>
                            <div className="p-2 bd-highlight"><i class="fa-regular fa-circle-question"></i> &nbsp; 1 TRX = 0.0002 WBNB </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className="d-flex flex-row  align-items-start  justify-content-end bd-highlight">
                            <div className="p-2 bd-highlight"><button className="btn btn-outline-primary"> Add Liquidity</button></div>
                            <div className="p-2 bd-highlight"><button className="btn btn-outline-primary"> Trade</button></div>
                        </div>
                    </div>
                </div>

                <div className='row d-flex justify-content-center'>
                    <div className='col-md-4 text-white box'>
                        <div className='m-3'>
                            <h4>TOTAL TOKENS LOCKED</h4>
                        </div>
                        <div className="box-1">
                        <div className="d-flex flex-row  align-self-center bd-highlight justify-content-between">
                            <div className="p-3 bd-highlight"><i class="fa-regular fa-circle-question"></i> &nbsp;TRX</div>
                            <div className="p-3 bd-highlight">3.5706K</div>
                        </div>
                        <div className="d-flex flex-row  align-self-center bd-highlight justify-content-between">
                            <div className=" p-3 bd-highlight"><i class="fa-regular fa-circle-question"></i> &nbsp;WBNB</div>
                            <div className=" p-3 bd-highlight">0.6868</div>
                        </div>
                        </div>

                        <div className='m-3'>
                            <h4 className=''>Volume</h4>
                        </div>
                        <div className="box-2">
                        <div className="d-flex flex-row  align-items-center bd-highlight justify-content-between">
                            <div className="p-3 mt-2 bd-highlight"><i class="fa-regular fa-circle-question"></i></div>
                            <div className="p-3  mt-2 bd-highlight">124.7759K</div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='row d-flex justify-content-center'>
                    <div className='col-md-4 text-white mt-3'>
                        <div className="d-flex flex-row  align-self-center bd-highlight justify-content-between">
                            <button className="btn btn-lg">Last 24 Hours</button>
                            <button className="btn-btn btn-lg ">Last 7 Hours</button>
                        </div>
                    </div>
                </div>
                {/* <div className='row d-flex justify-content-center'>
                    <div className='col-md-4 text-white'>
                           <p>5 <img src={Line} className="img-fluid"/></p>
                    </div>
                </div> */}
            </div>

        </>
    )
}

export default DetailPage