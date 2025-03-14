import React from 'react';
import { Link } from 'react-router-dom';
// import img from '../src/images/banner.png';

export default function Card({news }) {
  return (
    <div style={{ height: 'fit-content' }} className='setStyle card-home'>
      <div className="card bg-light mb-3 my-3  mx-3 px-2 py-2" style={{ width: '18rem',height: "300px", display: 'inline-block' }}>
              {
                 news.urlToImage ? (
                  <img
                  className="card-img-top"
                  src={news.urlToImage}
                  style={{ maxWidth: '100%', maxHeight: '50%',  height: 'auto' }} // Adjust these values
                  alt="Card image cap"
                />
                 ) : (
                  <img
                  className="card-img-top"
                  src="https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  style={{ maxWidth: '100%', maxHeight: '50%', height: 'auto' }} // Adjust these values
                  alt="Card image cap"
                />
                 )
              }


     
        <div className="card-body">
          <h5 className="card-title text-truncate">{news.title}</h5>
          <p className="card-text text-truncate">{news.description}</p>
          <Link state={news} to='/SingelPage' className="btn btn-dark">Read more</Link>
        </div>
      </div>
    </div>
  );
}
