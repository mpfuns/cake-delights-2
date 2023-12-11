export default function Header (){
    return (
        <header >
            <div className="header__container">
                <div className="header__description">
                    <h1>Welcome to <span className="neon-blue">Cake Delights</span>, the ultimate destination for all your cake cravings in the USA.</h1>
                    <h2>Our handcrafted cakes are the perfect addition to any celebration, and we take pride in being the best online cake shop.</h2>
                    <a href='#features'><button className="btn">Browse Cakes</button></a>
                </div>
                <figure className="header__img--wrapper">
                    <img src="undraw_birthday_cake_re_bsw5.svg"/>
                </figure>
            </div>
        </header>
    )

    }        
