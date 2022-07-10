import React, { Component } from 'react'
import Blog from './Blog'

export default class Blogs extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const {blogs}=this.props;
    return (
      <div  className='container'>
        {
            blogs.map(blog=>(
                <Blog key={blog.id} name={blog.ad} content={blog.aciklama} writer={blog.yazar} id={blog.id} ></Blog>
            ))
        }
      </div>
    )
  }
}
