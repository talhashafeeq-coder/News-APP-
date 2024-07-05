import React, { useState, useEffect } from 'react';
import { useUser, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';
import CardHome from '../../Components/CardHome';
import Navbar from "../../Components/Navbar";
import Loder from '../../Components/Loder';
import Footer from '../../Components/Footer';
import axios from 'axios';

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let allArticles = [];
        let page = 1;
        while (true) {
          const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5570b0c9727440c49c9a7528cd09a801&page=${page}`);
          const articles = response.data.articles;
          if (articles.length === 0) {
            break; // No more articles
          }
          allArticles = [...allArticles, ...articles];
          page++;
        }
        setArticles(allArticles);
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
        <div className="container-fuild">
          <Navbar />
        </div>
        <div className="container mt-4 mb-4">
          <div className="row">
            <div className="col-sm-3">
              <input
                className='form-control me-2'
                type="search"
                value={searchItem}
                onChange={handleInputChange}
                placeholder="Type to search " />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {articles.length === 0 ? <Loder /> : null}
            {filteredArticles.length === 0 && articles.length !== 0 ? (
              <div className="col-sm-12">
                <h2 className='text-dark'>No articles found.</h2>
              </div>
            ) : (
              filteredArticles.map((news, index) => (
                <div key={index} className="col-md-4 col-sm-12">
                  <CardHome news={news} />
                </div>
              ))
            )}
          </div>
        </div>
        <div className="container-fulid text-center mt-5">
          <Footer />
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
