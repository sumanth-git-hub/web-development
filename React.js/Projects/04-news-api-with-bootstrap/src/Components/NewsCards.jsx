import React from 'react'
import defaultNewsImage from '../assets/default-news.jpg'

const NewsCards = ({newsHeadline, newsDescription, featuredImage, readMore}) => {
  return (
    <div className="card mt-2" style={{maxWidth: "350px"}}>
  <img style={{height: '200px', width: "100%"}} src={featuredImage ? featuredImage : defaultNewsImage} className="card-img-top" alt="News Image" />
  <div className="card-body">
    <h5 className="card-title">{newsHeadline.slice(0,60)+ "..."}</h5>
    <p className="card-text">{newsDescription ? newsDescription.slice(0, 120) + "..." : "Click on the Read more button to know more about the news"}</p>
    <a href={readMore} className="btn btn-primary" target='_blank' rel='nofollow'>Read more</a>
  </div>
</div>
  )
}

export default NewsCards