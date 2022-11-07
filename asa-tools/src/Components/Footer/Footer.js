import React from "react";
import "./footer.css"
import {Link} from "react-router-dom";
function Footer() {
    function btnHandlerDown2() {
        let el = document.querySelector(".visual_button");
        el.style.background = "#026dda";
    }
    function btnHandlerUp2() {
        let el = document.querySelector(".visual_button");
        el.style.background = "#1890ff";
    }
    return(
        <>
            {/*<div className="container">*/}
                <div className= "feedback_field_frame" >
                    <div className="feedback_field">
                        <h1 className="second_block_text_container_h1 text_centre">Let’s improve your Search Ads ROAS together</h1>
                        <h4 className="second_block_text_container_h4 ">Leave your email and we will contact you for a demo</h4>
                        <div className="email_button_container">
                                <span className="visual_email_input" >
                                    <input type="text" placeholder="mail@domain.com" className="email_input"/>
                                    <span className="input_suffix">
                                        <span className="clear_suffix"></span>
                                    </span>
                                </span>
                            <span className="button_container">
                                <button className="visual_button" onMouseUp={btnHandlerUp2} onMouseDown={btnHandlerDown2}>
                                    <span>Schedule a demo</span>
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
            <div className="footer_container">
                <div className="ant-col">
                    <a className="ant-col-a">
                        <Link to ="/terms-of-service"><span>Terms of Service</span></Link>
                    </a>
                </div>
                <div className="ant-col">
                    <a className="ant-col-a">
                        <span>Privacy Policy</span>
                    </a>
                </div>
                <div className="ant-col">
                    <a className="ant-col-a">
                        <span>Contact Us</span>
                    </a>
                </div>
            </div>
            <div className="support_text">
                <h5 className="ant-typography" style={{textAlign: "center", margin: "0 1em 1em",}}>We support Ukraine <strong style={{fontWeight:700, fontSize: "12px"}}>UA</strong></h5>
            </div>
        </>
    )
}
export default Footer;