import '../css/popular-section.css'
import nft1 from "../assets/nft-1.jpg";
import nft2 from "../assets/nft-2.jpg";
import nft3 from "../assets/nft-3.jpg";
import nft4 from "../assets/nft-4.jpg";
import nft5 from "../assets/nft-5.jpg"

const Popular = () => {
    return (
        <section className="popular">
            <h1>Popular this week</h1>
            <div className="cards-container">
                <div className="cards-box">
                    <div className="nft-card">
                        <img src={nft1} alt="s" />

                        {/* <div className="nft-detail">
                            <div className="nft-detail-left">
                                <h3>
                                    Digital Decade
                                </h3>
                                <p>by Diddy</p>
                            </div>

                            <div className="nft-detail-left">
                                <p>32.4 ETH</p>

                                <button className="nft-purchase-btn">
                                    Purchase
                                </button>
                            </div>
                        </div> */}
                    </div>

                    <div className="nft-card">
                        <img src={nft2} alt="s" />

                    </div>

                    <div className="nft-card">
                        <img src={nft3} alt="s" />
                    </div>

                    <div className="nft-card">
                        <img src={nft4} alt="s" />
                    </div>

                    <div className="nft-card">
                        <img src={nft5} alt="s" />
                    </div>
                </div>
                <div aria-hidden className="cards-box">
                    <div className="nft-card">
                        <img src={nft1} alt="s" />

                        {/* <div className="nft-detail">
                            <div className="nft-detail-left">
                                <h3>
                                    Digital Decade
                                </h3>
                                <p>by Diddy</p>
                            </div>

                            <div className="nft-detail-left">
                                <p>32.4 ETH</p>

                                <button className="nft-purchase-btn">
                                    Purchase
                                </button>
                            </div>
                        </div> */}
                    </div>

                    <div className="nft-card">
                        <img src={nft2} alt="s" />

                    </div>

                    <div className="nft-card">
                        <img src={nft3} alt="s" />
                    </div>

                    <div className="nft-card">
                        <img src={nft4} alt="s" />
                    </div>

                    <div className="nft-card">
                        <img src={nft5} alt="s" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popular;