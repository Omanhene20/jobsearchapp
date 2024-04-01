import React,{ useEffect, useState }  from "react";
import Jobcard from './jobcard.jsx';
import axios from 'axios';
const Joblisting= () => {

    const [jobs, setJobs] = useState({jobs:[]});

    useEffect(() => {
        axios.get(`https://remotive.com/api/remote-jobs?search=front`)
        .then(response =>
         setJobs(response.data)
        )
        .catch(err => console.log(err));
    }, []);

   let content = jobs.jobs.map((job, index) => (
        <Jobcard key={index} {...job} />
      ))

    return(
        <div>
            <div className="job_listing_area">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="section_title text-center">
                        <h3>Job Listing</h3>
                    </div>
                </div>
  
            </div>
            <div className="job_lists">
                <div className="row">
                    {content}
                    
                </div>
            </div>
        </div>
    </div>
        </div>
        )

}
export default Joblisting;