import React from "react";
const Footer = () => {
    return(
        <div>
            <footer className="footer">
        <div className="footer_top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                            

                        </div>
                    </div>
                    <div className="col-xl-2 col-md-6 col-lg-2">
                        <div className="footer_widget wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".4s">

                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 col-lg-3">
                        <div className="footer_widget wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".5s">
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 col-lg-4">
                        <div className="footer_widget wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".6s">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-right_text wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".3s">
            <div className="container">
                <div className="footer_border"></div>
                <div className="row">
                    <div className="col-xl-12">
                        <p className="copy_right text-center">
                            
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
      
        </div>
        )

}
export default Footer;