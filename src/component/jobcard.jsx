import React from "react";
import { Link } from 'react-router-dom';
const Jobcard = (job) => {
    return( 
            <div className="col-lg-12 col-md-12">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img style={{width: '100%'}} src={"#"} alt="" />
                                </div>
                                <div className="jobs_conetent">
                                    <a href="job_details.html"><h4>{job.title}</h4></a>
                                    <div className="links_locat d-flex align-items-center">
                                        <div className="location">
                                            <p> <i className="fa fa-map-marker"></i>{job.candidate_required_location}</p>
                                        </div>
                                        <div className="location">
                                            <p> <i className="fa fa-clock-o"></i> {job.job_type}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div className="apply_now">
                                    <Link className="boxed-btn3" to={'/jobdetails/' + job.id}> Apply Now </Link>
                                </div>
                                <div className="date">
                                    <p>{job.publication_date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
 
     )

}
export default Jobcard;