import "../css/Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__main">
                <div className="footer__social">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-x-twitter"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                </div>

                <div className="footer__columns">
                    <div className="footer__column">
                        <h4>FILMS</h4>
                        <a href="#">Features</a>
                        <a href="#">Shorts</a>
                        <a href="#">Series</a>
                        <a href="#">SparkShorts</a>
                        <a href="#">Documentaries</a>
                    </div>
                    <div className="footer__column">
                        <h4>TECH</h4>
                        <a href="#">Tech at Pixar</a>
                        <a href="#">RenderMan</a>
                        <a href="#">Open USD</a>
                        <a href="#">Software RD</a>
                        <a href="#">Libraries</a>
                    </div>
                    <div className="footer__column">
                        <h4>CAREERS</h4>
                        <a href="#">Careers At Pixar</a>
                        <a href="#">Internships</a>
                        <a href="#">Life At Pixar</a>
                    </div>
                    <div className="footer__column">
                        <h4>MORE</h4>
                        <a href="#">Leaders</a>
                        <a href="#">Our Story</a>
                        <a href="#">Events</a>
                        <a href="#">Pixar In A Box</a>
                        <a href="#">Supplier Diversity</a>
                        <a href="#">FAQ's</a>
                    </div>
                </div>
            </div>


            <div className="footer__bottom">
                <p className="footer__text">Do Not Sell or Share My Personal Information</p>
                <div className="footer__links">
                    <a href="#">Privacy Policy</a> |
                    <a href="#"> Your US State Privacy Rights</a> |
                    <a href="#"> Childrens Online Privacy Policy</a> |
                    <a href="#"> Interest Based Ads</a> |
                </div>
                <p>© 1986–2025 Disney•Pixar</p>
            </div>

        </footer>
    );
}

export default Footer;
