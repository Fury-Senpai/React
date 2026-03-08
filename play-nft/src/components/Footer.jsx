import '../css/footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="footer-left">
                <h1>
                    PLAY <span>NFT</span>
                </h1>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus adipisci eligendi repudiandae ut ex nemo voluptatibus qui sunt ipsum illum quibusdam, fugiat itaque necessitatibus nam ea quis perferendis nobis mollitia.
                </p>

                <div className="footer-social-links">
                    <span><i class="fa-brands fa-instagram"></i></span>
                    <span><i class="fa-brands fa-x-twitter"></i></span>
                    <span><i class="fa-brands fa-facebook"></i></span>
                    <span><i class="fa-brands fa-discord"></i></span>
                </div>
            </div>

            <div className="footer-right">
                <div className="footer-page-nav">
                    <h3>Explore</h3>
                    <ul>
                        <li>Art</li>
                        <li>Photography</li>
                        <li>Music</li>
                        <li>Games</li>
                    </ul>
                </div>
                <div className="footer-page-nav">
                    <h3>My Account</h3>
                    <ul>
                        <li>My Profile</li>
                        <li>My Collections</li>
                        <li>My Favourites</li>
                        <li>My Account Settings</li>
                    </ul>
                </div>
                <div className="footer-page-nav">
                    <h3>Resources</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>Partners</li>
                        <li>Suggestions</li>
                        <li>Newsletters</li>
                    </ul>
                </div>
                <div className="footer-page-nav">
                    <h3>Company</h3>
                    <ul>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Ranking</li>
                        <li>Activity</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;