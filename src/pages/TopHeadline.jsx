import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import CardTopHeadline from '../../Components/CardTopHeadline';
import Footer from '../../Components/Footer';
import Loder from '../../Components/Loder';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

export default function TopHeadline() {
  const [articles, setArticles] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=5570b0c9727440c49c9a7528cd09a801');
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);
  };

  const filteredArticles = articles.filter(news =>
    news.title.toLowerCase().includes(searchItem.toLowerCase())
  );

  return (
    <div>
      <SignedIn>
        <Navbar />
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="col-sm-3">
              <input
                className='form-control me-2'
                type="search"
                value={searchItem}
                onChange={handleInputChange}
                placeholder="Type to search"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {articles.length === 0 ? <Loder /> : null}
            {filteredArticles.length === 0 && articles.length !== 0 ? (
              <div className="col-sm-12">
                <h3 className='text-dark'>No articles found.</h3>
              </div>
            ) : (
              filteredArticles.map((news, index) => (
                <div key={index} className="col-md-4 col-sm-12">
                  <CardTopHeadline news={news} />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="container-fluid text-center">
          <Footer />
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
