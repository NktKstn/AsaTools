import React from "react";
import "./blog.css"
import {Link} from "react-router-dom";

function Blog() {
    return(
        <>
            <main className="blog-layout-content">
                <div className="blog-container" style={{width: "100%", maxWidth: "960px"}}>
                    <h3 className="h3-blog" style={{textAlign: "center", margin: "0 0 1em"}}>Articles</h3>
                    <div className="blog-ant-col">
                        <div className="blog-text">
                            <div className="blog-ant-col" style={{padding: "28px 28px 28px 28px", width: "100%", color: "rgb(119, 119, 119)"}}>
                                <Link to ="/blog/asaPerfomance">
                                    <h4 className="h4-blog">How to measure Apple Search Ads performance with ASATools</h4>
                                    <div style={{marginBottom: "0px", color: "rgba(0,0,0,.85)", overflowWrap: "break-word"}}>This guide will show you what information you can get from ASATools reports.</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="blog-ant-col">
                        <div className="blog-text">
                            <div className="blog-ant-col" style={{padding: "28px 28px 28px 28px", width: "100%"}}>
                                <Link to ="/blog/amplitude-retention">
                                    <h4 className="h4-blog">How to calculate retention by keywords</h4>
                                    <div style={{marginBottom: "0px", color: "rgba(0,0,0,.85)", overflowWrap: "break-word"}}>This tutorial will guide you on how to create a report, which will show retention for a different keywords.</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="blog-ant-col">
                        <div className="blog-text">
                            <div className="blog-ant-col" style={{padding: "28px 14px 28px 28px", width: "100%"}}>
                                <Link to ="/blog/">
                                    <h4 className="h4-blog">How to calculate install to key action conversion by keywords</h4>
                                    <div style={{marginBottom: "0px", color: "rgba(0,0,0,.85)", overflowWrap: "break-word"}}>This tutorial will guide you on how to create a report, which will show conversions from app install to paywall open for a different keywords.</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>



            </main>
        </>
    )
}
export default Blog;