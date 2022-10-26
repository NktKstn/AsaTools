import React from "react";
import '../App.css';

function Main() {

    function btnHandlerDown() {
        let el = document.querySelector(".first_block_button");
        el.style.background = "#026dda"
    }
    function btnHandlerUp() {
        let el = document.querySelector(".first_block_button");
        el.style.background = "#1890ff"
    }
    return(
        <>
            <main>
                <div className="container">
                    <div className="ceil" >
                        <div className="first_block">
                            <div className="first_bloc_info">
                                <h1 className="style_text" style={{textAlign: "center",}}>ASATools - run Apple Search Ads effectively</h1>
                                <h4 className="style_text" style={{textAlign: "center", fontWeight:"normal", marginBottom: "2em"}}>We will show income and ROAS on a keyword level</h4>
                                <div className="button_block">
                                    <button className="first_block_button" onMouseUp={btnHandlerUp} onMouseDown={btnHandlerDown}>
                                        <h5 className="style_text" style={{color: "white"}}>Book a demo</h5>
                                    </button>
                                    <h5 className="style_text" style={{margin: "1em", color: "rgba(0,0,0,.45)"}}>30 days trial - No card required</h5>
                                </div>
                            </div>
                        </div>
                        <div className="second_block">
                            {/*<div className="second_block_image_container" style={{padding:"20px"}}>*/}
                                    <div className="second_block_image">
                                        <div className="second_block_image_frame">
                                            <div className="second_block_picture" style={{position: "relative", }}>
                                                <img src="income_stats.png" alt="income_stats" className="second_block_img"/>
                                            </div>
                                        </div>
                                    </div>
                            {/*</div>*/}
                            <div className="second_block_text_container" >
                                <h1 className="second_block_text_container_h1">Keyword level earnings analytics</h1>
                                <h4 className="second_block_text_container_h4">Apple Search Ads dashboards do not show you earnings from your ad campaigns. ASATools will do it. We support in-app purchases and subscriptions and do not need third-party services.</h4>
                            </div>
                        </div>
                        <div className="third_block">
                            {/*<div className="second_block_image_container" style={{padding:"20px"}}>*/}
                            <div className="third_block_text_container" >
                                <h1 className="third_block_text_container_h1">Subscription status reports</h1>
                                <h4 className="third_block_text_container_h4">For every keyword, you will see trial starts, conversion to paying customers, cancelations, billing issues, and refunds. We will also show predicted income for every subscription.</h4>
                            </div>
                            <div className="third_block_image">
                                <div className="third_block_image_frame">
                                    <div className="third_block_picture" style={{position: "relative", }}>
                                        <img src="subscriptions.png" alt="subscriptions" className="third_block_img"/>
                                    </div>
                                </div>
                            </div>
                            {/*</div>*/}
                        </div>
                        <div className="fourth_block">
                            {/*<div className="second_block_image_container" style={{padding:"20px"}}>*/}
                            <div className="fourth_block_image">
                                <pre>
                                    <code style={{whiteSpace:"pre"}} className="fourth_block_img">
                                        <span style={{color: "rgb(92, 38, 153)"}}>ASATools</span><span>.instance.attribute(apiToken:</span>
                                        <span style={{color: "rgb(196, 26, 22)"}}>"your_token_here"</span>
                                        <span>)  response,error </span>
                                        <span style={{color: "rgb(170, 13, 145)"}}>in</span><br/>
                                        <span></span>
                                        <span></span>
                                        <span style={{color: "rgb(0, 116, 0)"}}>/* (optional) pass attribution</span><br/>
                                        <span style={{color: "rgb(0, 116, 0)"}}>   info to your product analytics */</span>
                                        <span><br/>}</span>
                                    </code>
                                </pre>
                            </div>
                            {/*</div>*/}
                            <div className="fourth_block_text_container" >
                                <h1 className="fourth_block_text_container_h1">Single line SDK integration</h1>
                                <h4 className="fourth_block_text_container_h4">That’s all you need to add to your code to measure campaigns effectiveness.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Main;