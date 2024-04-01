import React from "react";
import Logosearch from "./logosearch";
const Logo = () => {
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
                                        <img src="img/logo.png" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-7">
                                <div className="main-menu  d-none d-lg-block">
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                                <div className="Appointment">
                                    <div className="phone_num d-none d-xl-block">
                                    </div>
                                    <div className="d-none d-lg-block">
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
   </div>
        )

}
export default Logo;