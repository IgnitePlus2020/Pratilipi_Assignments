import React from 'react';
import "./Footer.css";


function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column 1 */}
                    <div className="col">
                        <ul className="list-unstyled">
                            <h6>STOREVA INC.</h6>
                            <li>342-420-6569</li>
                            <li>Bangalore, India</li>
                            <li>123 Street South North</li>
                        </ul>
                    </div>
                    
                     {/* Column 2 */}
                     <div className="col">
                        <ul className="list-unstyled">
                            <h6>Product</h6>
                            <li><a href="/" style={{color: "#A0A4A5"}}>News</a></li>
                            <li><a href="/" style={{color: "#A0A4A5"}}>About</a></li>
                            <li><a href="/" style={{color: "#A0A4A5"}}>Privacy Policy</a></li>
                            <li><a href="/" style={{color: "#A0A4A5"}}>Terms of Service</a></li>
                        </ul>                    
                    </div>

                     {/* Column 3 */}
                     <div className="col">
                        <ul className="list-unstyled">
                            <h6>Partnerships</h6>
                            <li><a href="/" style={{color: "#A0A4A5"}}>Become an Affiliate</a></li>
                            <li><a href="/" style={{color: "#A0A4A5"}}>Become a Partner</a></li>
                            <li><a href="/" style={{color: "#A0A4A5"}}>Listing Criteria</a></li>
                        </ul> 
                                              
                    </div>
                    
                    <div className="row">
                    <hr/>
                        <p className="col">
                            &copy;{new Date().getFullYear()} StoreEva | All Rights Reserved | Terms of Services | Privacy
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;

