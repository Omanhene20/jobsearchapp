import React from "react";
const Logosearch = () => {
    return(
        <div>
    <div className="catagory_area" style={{"backgroundColor":"#001D38"}}>
        <div className="container">
            <div className="row cat_search">
                <div className="col-lg-9 col-md-9">
                    <div className="single_input">
                        <input type="text" placeholder="Search keyword" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="job_btn">
                        <a href="#" className="boxed-btn3">Find Job</a>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                </div>
            </div>
        </div>
    </div>   
        </div>
        )

}
export default Logosearch;