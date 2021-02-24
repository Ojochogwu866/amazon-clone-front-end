import React from 'react';
import './Home.css';
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">

                <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="" />
                    <div className="home__row">
                    <Product id="90829332" title='Bedtime originals, twinkle toes pink elephant plush, hazel' price={8.59} image={'https://m.media-amazon.com/images/I/81ZB62prn-L._AC_UL320_.jpg'} rating={5} />
                    <Product id="56364857" title='Soft landing, landing duos, 2-piece plush and premium sweat seat character chair bundle. Teal unicorn' price={69} image={'https://m.media-amazon.com/images/I/813UGwhDDHL._AC_UL320_.jpg'} rating={5} />

            
              </div>
               <div className="home__row">

                  <Product id="75648383" title='Animals figure. 54 piece mini-jungle Animal toys set, valefor toy realistic wild vinyl animal learning' price={11.95} image={'https://m.media-amazon.com/images/I/81uSwI7rY8L._AC_UL320_.jpg'} rating={5} />
                  <Product id="75473947" title='Justgive- among block active for kids 8 pcs' price={25.99} image={'https://m.media-amazon.com/images/I/51nFCqKdNhL._AC_UL320_.jpg'} rating={5} />
                  <Product id="89320849" title='The screaming Goat (booka and figure)' price={7.25} image={'https://m.media-amazon.com/images/I/61ayWgDYK7L._AC_UL320_.jpg'} rating={5} />


               </div>

               <div className="home__row">
               <Product id="97624958" title='Marvel spider- Man talking action figure, Multi' price={32.90} image={'https://m.media-amazon.com/images/I/71AC9xNJkPL._AC_UL320_.jpg'} rating={5} />

              </div>
            </div>
            
        </div>
    );
}

export default Home;
