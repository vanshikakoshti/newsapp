import React, { Component } from 'react'

export class NewsItems extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} =  this.props
    return (
      <>
        <div className="card" >
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%', zIndex:1}}>{source}</span>
        <img src={! imageUrl?"https://platform.theverge.com/wp-content/uploads/sites/2/2025/09/P90615617_highRes.jpg?" : imageUrl} className="card-img-top" alt="..." />
      
        <div className="card-body">
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark">Read More</a>
        </div>
        </div>
      </>
    )
  }
}
export default NewsItems;
