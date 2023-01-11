// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      author: eachItem.author,
      title: eachItem.title,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      topic: eachItem.topic,
    }))

    this.setState({blogsList: updatedData, isLoading: false})
  }

  renderBlogItems = () => {
    const {blogsList} = this.state

    return blogsList.map(eachBlog => (
      <BlogItem blogData={eachBlog} key={eachBlog.id} />
    ))
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blogs-list">
        {isLoading ? (
          <Loader
            type="TailSpin"
            color="#00BFFF"
            height={50}
            width={50}
            data-testid="loader"
          />
        ) : (
          this.renderBlogItems()
        )}
      </div>
    )
  }
}

export default BlogList
