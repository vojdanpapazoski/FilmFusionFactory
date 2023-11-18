import React from 'react';
import "../css/Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className='footer-content'>
      <div className="contact">
      <h3>Contact</h3>
      <br />
      <p>Email: info@filmfusionfactory.com </p>
      <br />
      <p>Contact Phone: +447850769770 & +442891547276 </p>
      <br />
      <p>Adress: Hythe Station Rd 2000, Colchester, UK</p>
      <br />
      </div>
      <div className="awards">
      <h3>Awards</h3>
      <br />
      <div className='medal'>
      <img src="../../images/medal.png" alt="medal" srcset="" />
      <p>Gold Star Performance Trophy: 
        Awarded to actors for remarkable performances</p>
        </div>
        <br />
    <div className='bronze'>
      <img src="../../images/bronze-cup.png" alt="" srcset="" />
      <p>Bronze Audience Choice Cup: 
        Given based on audience votes or popularity</p>
        </div>
      </div>
      <div className="info">
      <h3>About Us</h3>
      <br />
      <p>FilmFusionFactory is not just a brand,
         it's a creative hub where cinematic visions come to life.
         We pride ourselves on being storytellers, weaving narratives that captivate, 
         inspire, and resonate with audiences globally. Our work extends beyond entertainment,
         it's about connecting, inspiring, and provoking thought. We aim to spark emotions, 
         and leave a lasting impression through the stories we tell.</p>
      </div>
      </div>
    </div>
  )
}

export default Footer