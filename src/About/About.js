import React from 'react';
import pic from './Picture/Discover-sajek-valley.jpg'

const About = () => {
    return (
        <div className="mt-4">
            <div class="container">



                <div class="row">

                    <h2 style={{ color: "blue" }}>We Create Unique Vacations And Luxury Honeymoons Around The World</h2>
                    
                    <hr />
                    <div class="col-lg-6 col-md-12 col-sm-12">

                        <div className="my-5">
                            <h3 className="text-center" style={{ color: "#194d33" }}>Let's Get Started</h3>


                        </div>
                        <form>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email Address</label>
                                <input type="email" placeholder="Email Address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">Would You Like To Travel ? </div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPhone" class="form-label">Phone Number</label>
                                <input type="number" placeholder="Phone Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">What Is Your Reason For Travel ? </div>
                            </div>

                            <button type="submit" class="btn btn-primary ">Take Me There</button>
                        </form>
                    </div>


                    <div class="col-lg-6 col-md-12 col-sm-12 text-center">
                        <img className="se2" src={pic} style={{height:"400px",width:"570px"}} alt="" />
                    </div>




                </div>


            </div>

        </div>
    );
};

export default About;