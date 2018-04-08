import React from 'react';

class BlogpostItem extends React.Component {

  render() {
    return this._renderContentType();
  }

  _renderContentType() {
    const {
      title,
      contentType,
      description,
      quote,
      attachedFile
    } = this.props.blogpost;

    if (contentType == 'quote') {
      return (
        <div className='blogpost-item'>
          <h1>{title}</h1>
          <h2>{quote}</h2>
        </div>
      )
    } else if (contentType == 'text') {
      return (
        <div className='blogpost-item'>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'audio') {
      return (
        <div className='blogpost-item'>
          <h1>{title}</h1>
          <audio controls>
            <source src={attachedFile}></source>
          </audio>
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'photo') {
      return (
        <div className='blogpost-item'>
          <h1>{title}</h1>
          <img src={attachedFile} />
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'video') {
      return (
        <div className='blogpost-item'>
          <h1>{title}</h1>
          <video src={attachedFile} />
          <p>{description}</p>
        </div>
      )
    }
  }
}

export default BlogpostItem;
