import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {Link} from "react-router-dom";
const Job_details = () => {

    let { id } = useParams();
    const [job, setJob] = useState("")


    useEffect(() => {
    let data = localStorage.getItem("jobs");
    console.log("data: ", JSON.parse(data));
    data = JSON.parse(data)
    let singleJob = data.jobs.filter((row) => row.id == id)
    setJob(singleJob[0])
}
,[])

    return(
        <div>

<header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container-fluid ">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-2">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="img/logo.png" alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                    
                                </div>
                            </div>
                            
                                
                                    
                                    <div className="d-none d-lg-block">
                                        < Link className="boxed-btn3" to ={'/'}>Go Back </Link>
                                    </div>
                           
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
   

    <div className="bradcam_area bradcam_bg_1" style={{"backgroundColor":"#001D38"}}>
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="bradcam_text">
                        <h3>{job.title}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="job_details_area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="job_details_header">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img src="img/svg_icon/1.svg" alt=""/>
                                </div>
                                <div className="jobs_conetent">
                                    <a href="#"><h4>{job.title}</h4></a>
                                    <div className="links_locat d-flex align-items-center">
                                        <div className="location">
                                            <p> <i className="fa fa-map-marker"></i> {job.candidate_required_location}</p>
                                        </div>
                                        <div className="location">
                                            <p> <i className="fa fa-clock-o"></i>{job.job_type}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div className="apply_now">
                                    <a className="heart_mark" href="#"> <i className="ti-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="descript_wrap white-bg">
                        <div className="single_wrap">
                            <div dangerouslySetInnerHTML={{ __html: job.description }} />;
                        </div>

                    </div>

                </div>
                <div className="col-lg-4">
                    <div className="job_sumary">
                        <div className="summery_header">
                            <h3>Job Summery</h3>
                        </div>
                        <div className="job_content">
                            <ul>
                                <li>Published on: <span>{job.publication_date}</span></li>
                                <li>Salary: <span>{job.salary}</span></li>
                                <li>Location: <span>{job.candidate_required_location}</span></li>
                                <li>Job Nature: <span>{job.job_type}</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="share_wrap d-flex">
                        <ul>
                            <li><a href="#"> <i className="fa fa-facebook"></i></a> </li>
                            <li><a href="#"> <i className="fa fa-google-plus"></i></a> </li>
                            <li><a href="#"> <i className="fa fa-twitter"></i></a> </li>
                            <li><a href="#"> <i className="fa fa-envelope"></i></a> </li>
                        </ul>
                    </div>
                    
                    </div>
                    </div>
                </div>
    </div> 
    </div>
    
              )

            }
export default Job_details;