import React, { useState } from 'react';
import axios from 'axios';
import Article from '../Article';
import {Rings} from "react-loader-spinner";
import "./index.css"
 function Webscraping()
{
    const [topic, setTopic] = useState('');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [failed,setFailed]=useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!topic) {
            setError('Please enter a topic');
            return;
        }
        setArticles([])
        setLoading(true);
        setError('');
        try {
            const response = await axios.post('http://localhost:5000/scrape', { topic });
            setArticles(response.data.articles);
            setFailed(false);
        } catch (err) {
            setFailed(true);
        } finally {
            setLoading(false);
        }
    };
    
      //funtion for data not fetched
      function ErrImg()
      {
        return(
         <div className='errimg-con'>
            <img className='errimg' alt="err-img" src='https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/error-icon.png'/>
            <p className='err-connection'>Check your connection or Try again!</p>
         </div>
        )
      }
       
      //function for Loader
        function LodingFun()
        {
           return (
                <div className='loading'>
                      <div className="products-details-loader-container">
                    <Rings type="ThreeDots" color="black" height="100" width="100" />
                    </div>
                </div>
            )
            
        }


    return (
        <div className='viewer-bg text-center'>
            <h1 className='medium-head'>Medium Article Scraper</h1>
            <form onSubmit={handleSubmit}>
                <input  className='search-box'
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter topic"
                />
                <button className='search-btn' type="submit">Search</button>
            </form>
                {loading && LodingFun()}
                {failed && ErrImg()}
                {error && <p className='err-msg'>{error} !</p>}
                {true && (<div>
                    <ul className=''>
                    {
                        articles.map((item,i)=>
                        {
                        return  <Article key={i} data={item} index={i}/>
                        })
                    }
                </ul>
                </div>)}
        </div>
    );
}

export default Webscraping;