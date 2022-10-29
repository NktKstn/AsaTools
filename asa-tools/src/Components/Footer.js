import React from "react";

function Footer() {
    return(
        <>
            <div className="footer_container">
                <div className="ant-col">
                    <a className="ant-col-a">
                        <span>Terms of Service</span>
                    </a>
                </div>
                <div className="ant-col">
                    <a className="ant-col-a">
                        <span>Terms of Service</span>
                    </a>
                </div>
                <div className="ant-col">
                    <a className="ant-col-a">
                        <span>Terms of Service</span>
                    </a>
                </div>
            </div>
            <div className="support_text">
                <h5 style={{textAlign: "center", margin: "0 1em 1em", color:"rgba(0,0,0,.85)",}}>We support Ukraine <b style={{fontWeight:700, fontSize: "12px"}}>UA</b></h5>
            </div>
        </>
    )
}
export default Footer;