// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogData: {}}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const updatedBlogData = {
      id: data.id,
      author: data.author,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      content: data.content,
      topic: data.topic,
    }

    this.setState({isLoading: false, blogData: updatedBlogData})
  }

  renderBlog = () => {
    const {blogData} = this.state
    const {title, author, avatarUrl, imageUrl, content, id} = blogData
    return (
      <div className="blog-info">
        <h1 className="blog-heading">{title}</h1>
        <div className="avatar-author-container">
          <img
            src={avatarUrl}
            alt={`avatar${id}`}
            className="blog-details-avatar"
          />
          <p className="blog-author">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-details-image" />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="blog-item-Details-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderBlog()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
