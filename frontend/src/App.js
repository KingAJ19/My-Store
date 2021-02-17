import React from 'react';

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="index.html">Anele's Store</a>
            </div>
            <div>
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <main>
            <div className="row center">
                <div className="card">
                    <a href="product.html">
                        <img className="medium" src="./images/Jerseys/Basketball/Kobe-Jersey.jpg" alt="kobe-jersey" />
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Kobe Bryant Jersey</h2>
                        </a>
                        <div className="rating">
                            <span> <i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                        </div>
                        <div className="price">
                            R400
                        </div>
                    </div>
                </div>


                 <div className="card">
                    <a href="product.html">
                        <img className="medium" src="./images/Air Jordan/Air-Jordan-ADG.jpg" alt="air-jordan-adg" />
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Air Jordan ADG</h2>
                        </a>
                        <div className="rating">
                            <span> <i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star-o"></i></span>
                            <span><i className="fa fa-star-o"></i></span>
                        </div>
                        <div className="price">
                            R350
                        </div>
                    </div>
                </div>


                 <div className="card">
                    <a href="product.html">
                        <img className="medium" src="./images/Hoodies/Normal/Friends-Hoodie.jpg" alt="friends-hoodie" />
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>F.R.I.E.N.D.S Hoodie</h2>
                        </a>
                        <div className="rating">
                            <span> <i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star-half-o"></i></span>
                            <span><i className="fa fa-star-o"></i></span>
                        </div>
                        <div className="price">
                            R500
                        </div>
                    </div>
                </div>


                 <div className="card">
                    <a href="product.html">
                        <img className="medium" src="./images/Watches/Candino-Swiss.jpg" alt="swiss-watch" />
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Candino Swiss Watch</h2>
                        </a>
                        <div className="rating">
                            <span> <i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star-o"></i></span>
                            <span><i className="fa fa-star-o"></i></span>
                        </div>
                        <div className="price">
                            R800
                        </div>
                    </div>
                </div>


                 <div className="card">
                    <a href="product.html">
                        <img className="medium" src="./images/Glasses/Camo-Glasses.jpg" alt="asteri-glasses" />
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Asteri Glasses</h2>
                        </a>
                        <div className="rating">
                            <span> <i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star-o"></i></span>
                            <span><i className="fa fa-star-o"></i></span>
                        </div>
                        <div className="price">
                            R250
                        </div>
                    </div>
                </div>


                <div className="card">
                    <a href="product.html">
                        <img className="medium" src="./images/Hats/Baseball-Hat.jpg" alt="baseball-hat" />
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Baseball Hat</h2>
                        </a>
                        <div className="rating">
                            <span> <i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star-half-o"></i></span>
                        </div>
                        <div className="price">
                            R75
                        </div>
                    </div>
                </div>


                <div className="card">
                    <a href="product.html">
                        <img className="medium" src="./images/Headphones/Beats-Headphones.jpg" alt="beats-headphones" />
                    </a>
                    <div className="card-body">
                        <a href="product.html">
                            <h2>Beats By Dre Headphones</h2>
                        </a>
                        <div className="rating">
                            <span> <i className="fa fa-star"></i></span>
                            <span><i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star"></i></span>
                            <span> <i className="fa fa-star-o"></i></span>
                            <span><i className="fa fa-star-o"></i></span>
                        </div>
                        <div className="price">
                            R450
                        </div>
                    </div>
                </div>
                
                
            </div>
        </main>
        <footer className="row center">
            All Rights Reserved
        </footer>
    </div>
  );
}

export default App;
