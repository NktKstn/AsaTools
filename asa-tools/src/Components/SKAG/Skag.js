import React from "react";
import {Link} from "react-router-dom";
import "./skag.css"

function Skag() {

    return(
            <main className="ant-layout-content">
                <div className="ant-row-position">
                    <div className="ant-layout-container">
                        <h1 className="h1-container">SKAG Management</h1>
                        <p className="p-container">
                            In Apple Search Ads even if you add a keyword as an exact match, apple will show it for<a className="a-container"
                            href="https://searchads.apple.com/help/keywords/0059-understand-keyword-match-types"> a specific term and its close variants, like common misspellings and plurals</a>.
                        </p>
                        <p className="p-container">
                            Imagine you want to advertise the keyword: "photo edit free". As you can see from the documentation on the link above, Search Ads will also be shown for the keywords "photo editor free" and "photoeditfree". This makes it harder to control bids and get analytics on a keyword level.
                        </p>
                        <p className="p-container">
                            If you want precise targeting, you can use SKAG structure. SKAG (Single Keyword Ad Group) is a campaign structure where you create a separate ad group for every keyword and place all other keywords in negative keywords on an ad group level.
                        </p>
                        <p>
                            <img src="skag.png" alt="skag structure schema" style={{verticalAlign: "middle",  maxWidth: "100%"}}/>
                        </p>
                        <p className="p-container">
                            This structure is hard to maintain manually, that's why in ASATools we've automated this process. You can upload a list of keywords, select CPT/CPA binds and we will create everything for you.
                        </p>
                    </div>
                </div>
            </main>

    )
}
export default Skag;