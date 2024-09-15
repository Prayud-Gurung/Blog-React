import React from "react";

function Footer() {
    return (
        <div id="footer">
            <div id="grass-container">
                <img style={{pointerEvents: "none !important"}} className="footer-grass" src="/images/grass.png" />
            </div>

            <img className="sunflower" src="/images/sunflower.png" alt=""/>

            <img className="butterfly-right" src="/images/butterfly.gif" />
            <img className="butterfly-left" src="/images/butterfly.gif" />
        </div>
    )
}

export default Footer