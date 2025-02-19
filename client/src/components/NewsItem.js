import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl, date, source, darkMode }) => {
  return (
    <div className='my-3'>
      <div className={`card ${darkMode ? 'card-dark-mode' : 'card-light-mode'}`}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={!imageUrl ? "https://images.thequint.com/thequint%2F2022-11%2F2f3ea09a-2fea-4ec2-b42f-ee1cc3fe0a63%2FGoogle_Pixel_Fold.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">By {!source ? "Unknown" : source} on {new Date(date).toGMTString()}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;