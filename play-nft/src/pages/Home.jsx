import '../css/home.css'

const Home = () => {
    return (
        <section className="home">
            <div className="home-left-container">
               <div className="hero-content">
                    <h1>Discover, Collect and Sell Dope Art and NFTs</h1>
                    <p>The world's largest digital marketplace for crypto collections and non fungible tokens (NFTs)</p>
               </div>

               <div className="hero-buttons">
                    <button className="discover-btn">
                        Discover
                    </button>
                    <button className="create-btn">
                        Create
                    </button>
                    <span className='video-btn'>
                        <i className="fa-solid fa-video"></i>
                        <a href="https://youtu.be/Aq5WXmQQooo?si=xSE4g4-0u8JyfdMH">Watch a video</a>
                    </span>
               </div>

               <div className="gradient-border">
                    <div className="audience-info">
                        <span>
                            <h4>27K +</h4>
                            <p>Art works</p>
                        </span>
                        <span>
                            <h4>20K +</h4>
                            <p>Auctions</p>
                        </span>
                        <span>
                            <h4>7K +</h4>
                            <p>Artists</p>
                        </span>
                </div>
               </div>
            </div>
            <div className="home-right-container">
                <div className="img-container">
                    <img src="https://i.pinimg.com/736x/e1/59/c2/e159c2f008e34498a7384af8874d7d23.jpg" alt="nft" />

                    <div className="nft-detail">
                        <div className="nft-detail-left">
                            <p>Ending in:</p>
                            <p>1h 20m 30s</p>

                            <button className="nft-bid-btn">
                                Place a Bid
                            </button>
                        </div>

                        <div className="nft-detail-left">
                            <p>Highest Bid:</p>
                            <p>32.4 ETH</p>

                            <button className="nft-purchase-btn">
                                Purchase
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home;