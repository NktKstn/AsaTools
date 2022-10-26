import React from "react";
import '../App.css';


function Header() {
    return(
        <>
            <section className="section">
                <div className="header" >
                    <div className="logo">
                        <a id="image_logo" href="/"><img src ="/images/logo.png" alt="logo" /></a>
                    </div>
                    <ul className="header_ul">
                        <li className="header_menu">
                            <span className="pricing"><a href="">Pricing</a></span>
                        </li>
                        <li className="header_menu">
                            <span className="products"><a href="">Products</a></span>
                        </li>
                        <li className="header_menu">
                            <span className="blog"><a href="">Blog</a></span>
                        </li>
                        <li className="header_menu">
                            <span className="dashboard"><a href="">Dashboard</a></span>
                        </li>

                    </ul>
                </div>
            </section>
        </>
    )
}
export default Header;