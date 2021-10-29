import React from 'react';
import fakedata from '../Tour/Tour.json';
import '../Tour/TourDiary.css';

const TourDiary = () => {
    return (
        <div>
            <br />
            <br />
            <h1 className="text-center my-lg-2 my-md-0 my-sm-0 " style={{ fontFamily: 'Besley', color: "#303f9f", textAlign: "center" }}> Sajek, The Valley Of Cloud’s Best  Resorts To Stay</h1>
            <hr />


            <div className="row ms-lg-4 p-lg-5 ms-md-0 p-md-0 ms-sm-0 p-sm-0">


                {
                    fakedata.map(v =>

                        <div className="col-lg-4 col-md-12 col-sm-12 rounded" style={{ fontFamily: 'Besley' }}>

                            <div className="mt-3" style={{ color: "black" }}>

                                <div className="rounded shadow ">

                                    <img  style={{height:"200px",width:"200px"}} src={v.img} alt="" />
                                    <h6>{v.ownerName}</h6>
                                    <p>{v.phoneNumber}</p>
                                    <p style={{ color: "#ba1f54" }}>{v.details}</p>
                                    <div className="ps-lg-5 ms-lg-2 mb-lg-3 ps-md-0 ms-md-0 mb-md-0 ps-sm-0 ms-sm-0 mb-sm-0">

                                        <button  className="btn btn-primary ">Book A Room</button>

                                    </div>


                                </div>



                            </div>

                        </div>


                    )
                }


            </div>
        </div>
    );
};

export default TourDiary;