// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props

  const {imageUrl, title, topic, avatarUrl, author, id} = blogData
  return (
    <Link to={`/blogs/${id}`} className="nav-link">
      <div className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="blog-image" />
        <div className="text-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
