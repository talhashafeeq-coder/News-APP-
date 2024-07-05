import React from 'react'
import { useLocation } from 'react-router-dom'


const SinglePage = () => {
    const location = useLocation()
    console.log(location)
    return (
        <>
            <div className="container mt-5">
                <h1 className='text-light text-center'>   More Details :</h1>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        <h3 className='text-dark'> Title :</h3><p className='text-dark mt-3'>  {location.state.title}</p>
                        <h3 className='text-dark'> Description :</h3> <p className='text-dark mt-3'>  {location.state.description}</p>
                        <h3 className='text-dark'> Content :</h3> <p className='text-dark mt-3'>  {location.state.content}</p>
                        <h3 className='text-dark'> PublishedAt :</h3><p className='text-dark mt-3'> {location.state.publishedAt}</p>
                    </div>
                    <div className="col-md-6">
                        <h1 className='text-dark'>{location.state.author}</h1> <br />
                        <img src={location.state.urlToImage} alt="" style={{
                            border: '4px solid #778beb',  borderRadius: '27px',padding: '5px', width: '150px', width: 'auto',  height: "30%" }} />
                        <h3 className='text-dark'> LINK :</h3><p className='text-dark mt-2'> {location.state.url}</p>
                    </div>
                </div>
            </div>
        </>
    );
};


export default SinglePage
