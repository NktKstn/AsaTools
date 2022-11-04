import React from "react";
import "./asaPerfomance.css";
import {Link} from "react-router-dom";

function AsaPerfomance() {
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
                                            <Link to ="/blog/asa-perfomance">
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
                        <h1 className="h1-blog">How to measure Apple Search Ads performance with ASATools</h1>
                        <p className="p-blog">This guide will show you what information you can get from ASATools reports.</p>
                        <h2 className="h2-blog">General use case</h2>
                        <p className="p-blog">While in the Apple Search Ads admin panel you can only see expenses, in ASATools you will also see revenue for every campaign, ad group, and keyword. Here is what it looks like:</p>
                        <p><img style={{maxWidth: "100%", verticalAlign: "middle", borderStyle: "none"}} src="/short-report.png" alt="short report"/></p>
                        <p className="p-blog">Understanding income for each keyword will help you to invest in keywords that have positive ROAS and remove those, which don't. There's also "ltv per install" column which makes it easier to correct your CPT/CPI bids in the search ads admin panel.</p>
                        <h2 className="h2-blog">How income data is calculated</h2>
                        <p className="p-blog">ASATools shows proceeds for one-time purchases and subscriptions. For one-time purchases, you will see income from users that installed your app in the selected time period. For subscriptions, you will see estimated income based on historical data for the purchased product. This approach allows measuring ads performance without waiting full subscription lifetime.</p>
                        <h2 className="h2-blog">Search ads conversions</h2>
                        <p className="p-blog">Combining search ads conversion info with income info can help you improve your ASO, which could also improve ASA performance. Let's take a closer look at a conversion report:</p>
                        <p><img style={{maxWidth: "100%", verticalAlign: "middle", borderStyle: "none"}} src="/convensions.png" alt="short report"/></p>
                        <p>The most important columns here are "impression to install conversion" and "ltv per install". Impression to install conversion is one of the main metrics in the app store ranking. If you have this value higher than your competitors, you're likely to move to the top of the search result for this keyword.</p>
                        <p>Impression to install conversion depends only on your meta information: app icon, title, subtitle, screenshots, and description. If you have a big conversion, it's likely your app meta matches with user requests. </p>
                        <p>Sometimes it happens that a keyword has a good impression to install conversion, but low ltv per install. In this case, you could gain top positions in search results, but they will not give you big revenue.</p>
                        <p>On the other side, there may be keywords with low conversion, but good revenue. There may be two cases describing it: </p>
                        <ol className="ol-blog">
                            <li>
                                <p>Your app meta does not respond to the user request, but once a user downloads it, it solves the problem and the user want to pay for it. It may be a point of growth. If you change your app meta to fit the request, you could improve your organic and search ads revenue;</p>
                            </li>
                            <li>
                                <p>There may be competitors from other categories for the same search request. The common case here is a mix of games and apps in search results. For example, the search term "rollerblading" could lead to rollerblading games and apps for rollerbladers: tutorials, GPS trackers, or community apps. In this case low impression to install conversion is expected because there may be users that searched for another category.</p>
                            </li>
                        </ol>
                        <h2 className="h2-blog">Other metrics</h2>
                        <p>While revenue and ROAS are usually the main metrics for mobile apps, sometimes you may need to compare usage metrics. For example, <a className="a-container"
                            href="">retention by keyword</a> or <a className="a-container" href="">conversion from install to key action</a> (tutorial completion, demo level completion, etc.) by keyword. Check out our blog for more info. </p>
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
            </main>
        </>
    )
}
export default AsaPerfomance;