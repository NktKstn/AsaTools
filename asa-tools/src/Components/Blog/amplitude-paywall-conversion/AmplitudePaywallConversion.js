import React from "react";
import "./amplitude_paywall_conversion.css";
import {Link} from "react-router-dom";

function AmplitudePaywallConversion () {
    return(
        <>
            <main className="blog-layout-content" style={{backgroundColor: "#fff", minHeight: "0"}}>
                <div>
                    <div className="hidden-blog">
                        <div className="sticky-list" >
                            <div className="sticky-list-header">
                                <h1 className="h1-blog">Another articles</h1>
                            </div>
                            <div style={{position:"relative", outline: "none"}}>
                                <div className="sticky-list-container">
                                    <ul style={{padding:"0", margin: "0", listStyle: "none"}}>
                                        <li className="sticky-list-li" style={{paddingLeft: "0"}}>
                                            <Link to ="/blog/asaPerfomance">
                                                <span className="ant-badge" style={{color:"rgb(119, 119, 119)"}}>
                                                    <span className="ant-badge-status-dot ant-badge-status-processing">
                                                    </span>
                                                    <span className="ant-badge-status-text"> </span>
                                                How to measure Apple Search Ads performance with ASATools
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="sticky-list-li" style={{paddingLeft: "0"}}>
                                            <Link to ="/blog/amplitude-retention">
                                                <span className="ant-badge" style={{color:"rgb(119, 119, 119)"}}>
                                                How to calculate retention by keywords
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="sticky-list-li" style={{paddingLeft: "0"}}>
                                            <Link to ="/blog/amplitude-paywall-conversion">
                                                <span className="ant-badge" style={{color:"rgb(119, 119, 119)"}}>
                                                How to calculate install to key action conversion by keywords
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-container">
                    <div style={{paddingBottom: "30px", fontSize: "1.3em"}}>
                        <h1 className="h1-blog">How to calculate install to key action conversion by keywords with ASATools and Amplitude?</h1>
                        <p className="p-blog">This tutorial will guide you on how to create a report, which will show conversions from app install to paywall open for a different keyword. In the end, you will receive this result:</p>
                        <p><img style={{maxWidth: "100%", verticalAlign: "middle", borderStyle: "none"}} src="/amplitude-paywall-conversion-1.png" alt="short report"/></p>
                        <p className="p-blog">On this screenshot, you can see that the keyword "time zone converter" has better conversion than average organic (first column) and other keywords.</p>
                        <h2 className="h2-blog">Requirements</h2>
                        <p>To get this result you have to integrate in your app <a className="a-container" href="">ASATools</a> and <a className="a-container" href="">Amplitude analytics</a></p>
                        <p className="p-blog">For this report, you will need to send an event to the Amplitude when ASATools SDK received an attribution response:</p>
                        <pre className="pre-blog" style={{marginTop: "0", marginBottom: "1em", overflow: "auto",padding: "0"}}>
                            <div className="code-blog">
                                <span style={{color:"rgb(221, 74, 104)"}}>ASATools</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>.</span>
                                <span>sharedInstance</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>.</span>
                                <span style={{color:"rgb(221, 74, 104)"}}>attribute</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>(</span>
                                <span>apiToken</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>:</span>
                                <span> </span>
                                <span style={{color:"rgb(102, 153, 0)"}}>"your_token_here"</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>)</span>
                                <span> </span>
                                <span style={{color:"rgb(153, 153, 153)"}}>{`{`}</span>
                                <span> response</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>,</span>
                                <span>error</span>
                                <span style={{color:"rgb(0, 119, 170)"}}> in</span>
                                <br/>
                                <span> </span>
                                <span> </span>
                                <span style={{color:"rgb(0, 119, 170)"}}>if</span>
                                <span> </span>
                                <span style={{color:"rgb(0, 119, 170)"}}>let</span>
                                <span> response </span>
                                <span style={{color:"rgb(154, 110, 58)", background: "rgba(255, 255, 255, 0.5)"}}>=</span>
                                <span> response </span>
                                <span style={{color:"rgb(153, 153, 153)"}}>{`{`}</span>
                                <br/>
                                <span>    </span>
                                <span style={{color:"rgb(221, 74, 104)"}}>Amplitude</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>.</span>
                                <span style={{color:"rgb(221, 74, 104)"}}>instance</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>(</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>)</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>.</span>
                                <span style={{color:"rgb(221, 74, 104)"}}>setUserProperties</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>(</span>
                                <span> response</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>.</span>
                                <span style={{color:"rgb(221, 74, 104)"}}>analyticsValues</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>(</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>)</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>)</span>
                                <br/>
                                <span>    </span>
                                <span style={{color:"rgb(221, 74, 104)"}}>Amplitude</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>.</span>
                                <span style={{color:"rgb(221, 74, 104)"}}>instance</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>(</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>)</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>.</span>
                                <span style={{color:"rgb(221, 74, 104)"}}>logEvent</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>(</span>
                                <span style={{color:"rgb(102, 153, 0)"}}>"did_receive_asa_attribution"</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>,</span>
                                <span> withEventProperties</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>:</span>
                                <span> response</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>.</span>
                                <span style={{color:"rgb(221, 74, 104)"}}>analyticsValues</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>(</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>)</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>)</span>
                                <br/>
                                <span>  </span>
                                <span style={{color:"rgb(153, 153, 153)"}}>{`}`}</span>
                                <br/>
                                <span style={{color:"rgb(153, 153, 153)"}}>{`}`}</span>
                            </div>
                        </pre>
                        <p className="p-blog">Also, you have to send an event to Amplitude when a paywall were shown:</p>
                        <pre className="pre-blog" style={{marginTop: "0", marginBottom: "1em", overflow: "auto",padding: "0"}}>
                            <div className="code-blog">
                                <span style={{color:"rgb(0, 119, 170)"}}>override</span>
                                <span> </span>
                                <span style={{color:"rgb(0, 119, 170)"}}>func</span>
                                <span> </span>
                                <span style={{color:"rgb(221, 74, 104)"}}>viewDidLoad</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>(</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>)</span>
                                <span> </span>
                                <span style={{color:"rgb(153, 153, 153)"}}>{`{`}</span>
                                <br/>
                                <span>  </span>
                                <span style={{color:"rgb(0, 119, 170)"}}>super</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>.</span>
                                <span style={{color:"rgb(221, 74, 104)"}}>viewDidLoad</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>(</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>)</span>
                                <br/>
                                <span> </span>
                                <span style={{color:"rgb(221, 74, 104)"}}> Amplitude</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>.</span>
                                <span style={{color:"rgb(221, 74, 104)"}}>instance</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>(</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>)</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>.</span>
                                <span style={{color:"rgb(221, 74, 104)"}}>logEvent</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>(</span>
                                <span style={{color:"rgb(102, 153, 0)"}}>"buy_pro_opened"</span>
                                <span style={{color:"rgb(153, 153, 153)"}}>)</span>
                                <br/>
                                <span style={{color:"rgb(153, 153, 153)"}}>{`}`}</span>
                            </div>
                        </pre>
                        <h2 className="h2-blog">Report creation</h2>
                        <p className="p-blog">Open <a className="a-container" href="">Amplitude dashboard</a>, select "New report" -> "Funnel report".</p>
                        <ol className="ol-blog" style={{lineHeight:"1.3em" , margin: "0 0 18.2px"}}>
                            <li>
                                did_receive_asa_attribution
                            </li>
                            <li>
                                buy_pro_opened
                            </li>
                        </ol>
                        <p>On the right side set "grouped by" to "asa_keyword_name". Also, it's better to select "completed within" to any amount of days enough to track your conversion. Just as at the screenshot below:</p>
                        <p><img style={{maxWidth: "100%", verticalAlign: "middle", borderStyle: "none"}} src="/amplitude-paywall-conversion-2.png" alt="short report"/></p>
                        <p>After this, you should get a report with the installs amount grouped by keywords on the right side and a unique paywall opens grouped by keyword on the left side.</p>
                        <p><img style={{maxWidth: "100%", verticalAlign: "middle", borderStyle: "none"}} src="/amplitude-paywall-conversion-3.png" alt="short report"/></p>
                        <p>If there's no data, you should check the date range at the top right corner of the report screen.</p>
                        <p>Using this method, you can track conversion to any action which is important to your product: paywall open, tutorial completion, demo level completion, etc.</p>
                    </div>
                </div>
                <div>
                    <div style={{position:"sticky", top: "88px"}}>
                        <div className="sticky-list">
                            <div className="sticky-list-header">
                                <h1 className="h1-blog">Another articles</h1>
                            </div>
                            <div style={{position:"relative", outline: "none"}}>
                                <div className="sticky-list-container">
                                    <ul style={{padding:"0", margin: "0", listStyle: "none"}}>
                                        <li className="sticky-list-li" style={{paddingLeft: "0"}}>
                                            <Link to ="/blog/asa-perfomance">
                                                <span className="ant-badge" style={{color:"rgb(119, 119, 119)"}}>
                                                How to measure Apple Search Ads performance with ASATools
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="sticky-list-li" style={{paddingLeft: "0"}}>
                                            <Link to ="/blog/amplitude-retention">
                                                <span className="ant-badge" style={{color:"rgb(119, 119, 119)"}}>
                                                How to calculate retention by keywords
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="sticky-list-li" style={{paddingLeft: "0"}}>
                                            <Link to ="/blog/amplitude-paywall-conversion">
                                                <span className="ant-badge" style={{color:"rgb(119, 119, 119)"}}>
                                                    <span className="ant-badge-status-dot ant-badge-status-processing">
                                                    </span>
                                                    <span className="ant-badge-status-text"> </span>
                                                How to calculate install to key action conversion by keywords
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default AmplitudePaywallConversion;