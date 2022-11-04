import React from "react";
import "./header.css"
import {Link} from "react-router-dom";


function Header() {
    // const popupLinks = document.querySelectorAll(".popup-link");
    // const body = document.querySelector("body");
    // const lockPadding = document.querySelectorAll(".lock-padding");
    //
    // let unlock = true;
    //
    // const timeout = 800;
    // if (popupLinks.length > 0) {
    //     for (let i = 0; i < popupLinks.length;i++) {
    //         const popupLink = popupLinks[i];
    //         popupLink.addEventListener("click", function (e) {
    //             const popupName = popupLink.getAttribute("href").replace("#", "");
    //             const curentPopup = document.getElementById(popupName);
    //             popupOpen(curentPopup);
    //             e.preventDefault();
    //         });
    //     }
    // }
    // const popupCloseIcon = document.querySelectorAll(".close_popup");
    // if (popupCloseIcon.length >0) {
    //     for (let i = 0; i < popupCloseIcon.length; i++) {
    //         const el = popupCloseIcon[i];
    //         el.addEventListener("click", function (e) {
    //             popupClose(el.closest(".popup"));
    //             e.preventDefault();
    //         });
    //     }
    // }
    // function popupOpen(currentPopup) {
    //     if (currentPopup && unlock) {
    //         const popupActive = document.querySelector(".popup.open");
    //         if (popupActive) {
    //             popupClose(popupActive, false);
    //         }
    //         else {
    //             bodyLock();
    //         }
    //         currentPopup.classList.add("open");
    //         currentPopup.addEventListener("click", function (e) {
    //             if (!e.target.closest(".popup_content")) {
    //                 popupClose(e.target.closest(".popup"));
    //             }
    //         });
    //     }
    // }
    //
    // function popupClose(popupActive, doUnlock = true) {
    //     if (unlock) {
    //         popupActive.classList.remove("open");
    //         if (doUnlock) {
    //             bodyLock();
    //         }
    //     }
    // }
    //
    // function bodyLock() {
    //     const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    //     if (lockPadding.length > 0) {
    //         for (let i = 0; i < lockPadding.length; i++) {
    //             const el = lockPadding[i];
    //             el.style.paddingRight = lockPaddingValue;
    //         }
    //     }
    //     body.style.paddingRight = lockPaddingValue;
    //     body.classList.add("lock");
    //
    //     unlock = false;
    //     setTimeout(function () {
    //         unlock = true;
    //     },timeout);
    // }
    //
    // function bodyUnLock() {
    //     setTimeout(function () {
    //         if (lockPadding.length > 0) {
    //             for (let i = 0; i < lockPadding.length; i++) {
    //                 const el = lockPadding[i];
    //                 el.style.paddingRight = "0px";
    //             }
    //         }
    //         body.style.paddingRight = "0px";
    //         body.classList.remove("lock");
    //     },timeout);
    //
    //     unlock = false;
    //     setTimeout(function () {
    //         unlock = true;
    //     },timeout);
    // }
    //
    // document.addEventListener("keydown" , function (e) {
    //     if (e.which === 27) {
    //         const popupActive = document.querySelector(".popup.open");
    //         popupClose(popupActive);
    //     }
    // })
    // function pricing_menu() {
    //
    //     document.querySelector(".ant-modal-mask").style.display = "block"
    // }

    let flag = false;

    function btnHandlerDown() {
        let el = document.querySelector(".first_block_button");
        el.style.background = "#026dda";
    }

    function btnHandlerUp() {
        let el = document.querySelector(".first_block_button");
        el.style.background = "#1890ff";
    }

    // function fadeIn(timeout = 300) {
    //     let popup = document.querySelector(".popup-bg");
    //     popup.style.opacity = 0;
    //     popup.style.display = 'block';
    //     popup.style.transition = `opacity ${timeout}ms`;
    //     setTimeout(() => {
    //         popup.style.opacity = 1;
    //     }, timeout);
    // };

    // const fadeOut = (timeout = 500) => {
    //     let popup = document.querySelector(".popup-bg");
    //     popup.style.opacity = 1;
    //     popup.style.transition = `opacity ${timeout}ms`;
    //     popup.style.opacity = 0;
    //     setTimeout(() => {
    //         popup.style.display = 'none';
    //     }, timeout);
    // }


    function fade() {
        function fadeIn(timeout = 100) {
            let popup = document.querySelector(".popup-bg");
            document.body.style.width = "calc(100% - 17px)";
            document.body.style.overflow = "hidden";
            popup.style.opacity = 0;
            popup.style.display = 'block';
            popup.style.transition = "all 0.3s";
            setTimeout(() => {
                popup.style.opacity = 1;
            }, timeout);
        };
        const fadeOut = (timeout = 300) => {
            let popup = document.querySelector(".popup-bg");
            popup.style.opacity = 1;
            popup.style.transition = "all 0.3s";
            popup.style.opacity = 0;

            setTimeout(() => {
                popup.style.display = "none";
            }, timeout);
            setTimeout(() => {
                document.body.style.width = "100%";
                document.body.style.overflow = "auto";
            }, 301);
        }
        if (!flag) {
            fadeIn();
            flag = true;
        }
        else {
            fadeOut();
            flag = false;
        }
    }
    function svgAnimation() {
        document.querySelector(".svg-icon").style.background = "transparent";
        document.querySelector(".svg-icon").style.transition = "0.3s ease-in-out";
    }
    function popupOpen() {
        let popup = document.querySelector(".popup-bg");
        document.body.style.overflow = "hidden";
        popup.style.opacity = 1;
        popup.style.overflow = "visible";
    }
    function popupClose() {
        let popup = document.querySelector(".popup-bg");
        document.body.style.overflow = "visible";
        popup.style.opacity = 0;
        popup.style.overflow = "auto";
    }
    return(
        <div >
            <section className="section" >
                <div id="header" className="header lock-padding" >
                    <div className="logo">
                        <Link id="image_logo" to="/">
                            <img src ="/images/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <ul className="header_ul">
                        <li className="header_menu">
                            <div  className="pricing popup-link" onClick={fade}>
                                <span className="open-popup">Pricing</span>
                            </div>
                        </li>
                        <li className="header_menu">
                            <span className="products">
                                <Link to="/skag">Products</Link>
                            </span>
                        </li>
                        <li className="header_menu">
                            <span className="blog">
                                <Link to="/blog">Blog</Link>
                            </span>
                        </li>
                        <li className="header_menu">
                            <span className="dashboard">
                                <Link to="">Dashboard</Link>
                            </span>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="popup-bg" >

                <div className="ant-modal-content centered" >
                    <button type="button" aria-label="close" className="ant-modal-close">
                    <span className="ant-modal-close-x" onMouseLeave={svgAnimation} onClick={fade}>
                        <span role="img" aria-label="close"  className="anticon anticon-close ant-modal-close-icon"><svg className="svg-icon" viewBox="64 64 896 896" focusable="false" data-icon ="close" width="1em" fill="currentColor" aria-hidden="true"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg></span>
                    </span>
                    </button>
                    <div className="ant-modal-header">
                        <div className="ant-modal-title">Pricing</div>
                    </div>
                    <div className="ant-modal-body">
                        <div className="ant-row">
                            <div className="ant-col-24">
                                <h3 className="ant-col-24_h3">Includes 10.000 installs from Apple Search Ads.</h3>
                            </div>
                            <div className="ant-card">
                                <div className="ant-card-body" style={{padding: "24px"}}>
                                    <img src="/keys.png" alt="calendar"/>
                                    <h3 className="ant-col-24_h3" style={{marginBottom: "0px", marginTop: "1em"}}>Monthly Plan</h3>
                                    <h5 className="ant-col-24_h5" style={{marginTop: "0px"}}>$99/month</h5>
                                    <div className="full_acces">Full access to ASATools features.</div>
                                    <div className="full_acces"><br/></div>
                                    <div className="full_acces"><br/></div>
                                    <div className="full_acces"><br/></div>
                                </div>
                            </div>
                            <div className="ant-col-xs-24">
                            </div>
                            <div className="ant-card">
                                <div className="ant-card-body" style={{padding: "24px"}}>
                                    <img src="/keys2.png" alt="calendar"/>
                                    <h3 className="ant-col-24_h3" style={{marginBottom: "0px", marginTop: "1em"}}>Annual Plan</h3>
                                    <h5 className="ant-col-24_h5" style={{marginTop: "0px"}}>$58.25/month (41% savings)</h5>
                                    <div className="full_acces">Full access to ASATools features.</div>
                                    <div className="full_acces">Billed annually at $699 ($58.25/month)</div>
                                    <div className="full_acces"><br/></div>
                                    <div className="full_acces">Save $489 per year</div>
                                </div>
                            </div>
                            <div className="button_block">
                                <button className="first_block_button" onMouseUp={btnHandlerUp} onMouseDown={btnHandlerDown}>
                                    <h5 className="style_text" style={{color: "white"}}>Book a demo</h5>
                                </button>
                                <h5 className="style_text" style={{margin: "1em", color: "rgba(0,0,0,.45)"}}>30 days trial - No card required</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="popup-bg">*/}
            {/*    <div className="popup">*/}
            {/*        <span className="close-popup" onClick={closePopup}>X</span>*/}
            {/*    </div>*/}
            {/*</div>*/}



            {/*<div id="popup" className="popup">*/}
            {/*    <div className="popup_body">*/}
            {/*        <div className="popup_content">*/}
            {/*            <a  href="#header" className="popup_close close_popup">X</a>*/}
            {/*            <div className="popup_title">Title</div>*/}
            {/*            <div className="popup_text">Описание Price</div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div style={{position: "absolute", top: "0px", left: "0px", width: "100%"}}>*/}

            {/*</div>*/}
        </div>
    )
}
export default Header;