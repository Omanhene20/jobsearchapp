import React,{ useState } from "react";
const Logosearch = ({onQuery,onLoading}) => {
    const[ keyword, setKeyword]= useState("");


 function handleInput(){
    onQuery(keyword);
    onLoading(true)
}

    return(
        <div>
    <div className="catagory_area" style={{"backgroundColor":"#001D38"}}>
        <div className="container">
            <div className="row cat_search">
                <div className="col-lg-9 col-md-9">
                    <div className="single_input">
                        <input type="text" placeholder="Search keyword" onInput={(e)=>setKeyword(e.target.value)}/>
                    </div>
                </div>
                <div className="col-lg-3 col-md-12">
                    <div className="job_btn">
                        <a href="#" className="boxed-btn3" onClick={handleInput}>Find Job</a>
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