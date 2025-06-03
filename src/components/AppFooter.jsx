function Footer() {
    return <footer className="footer">
        <div className="container">
            <div className="footer-links">
<div className="flex">
                {/* col30 */}
                <div className="col-30"><div className="flex-footer">
                    <div className="col-4">
                        <h4>DC COMICS</h4>
                        <ul>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                        <h4>SHOP</h4>
                        <ul>
                            <li>Shop DC</li>
                            <li>Shop DC Collectables</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4>DC</h4>
                        <ul>
                            <li>Terms of use</li>
                            <li>Privacy Policy (New) </li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h4>SITES</h4>
                        <ul>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                </div>

                    {/* fine col-30 */}
                </div>
                <div className="col-70"><img src="/dc-logo-bg.png" alt="" /></div>
                </div>
            </div>
           
            </div> 
            {/* FOOTER BOTTOM */}
            <div className="footer-bottom">
                <div className="container">
                    <div className="flex">
                    <div className="col-70"><button className="signUp-btn"><a href="">SIGNUP NOW!</a></button></div>
                    <div className="col-30">
                        <div className="flex-btn">
                        <div className="col-30"><h5><a href="">FOLLOW US</a></h5></div>
                        <div className="col-70">
                            <div className="flex-logos">
                            <div ><img src="/footer-facebook.png" alt="" /></div>
                        <div><img src="/footer-twitter.png" alt="" /></div>
                        <div><img src="/footer-youtube.png" alt="" /></div>
                        <div><img src="/footer-pinterest.png" alt="" /></div>
                         <div><img src="/footer-periscope.png" alt="" /></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
    </footer>
}
export default Footer