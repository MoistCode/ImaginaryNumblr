import React from 'react';

class BlogpostItem extends React.Component {

  render() {
    return (
      <div className='blogpost'>
        <div className='blogpost-header'>
          <div className='header-remove'>
            <i
              className="fa fa-close"></i>
          </div>
        </div>
        {this._renderContentType()}
        <div className='blogpost-footer'>
          <div className='footer-likes'>
            <i
              className="fa fa-heart"
              style={{
                fontSize:"24px",
              }}></i>
              <p>{Math.floor((Math.random() * 100) + 1)}</p>
          </div>
        </div>
      </div>
    )
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
          <h1 className='title'>{title}</h1>
          <h1 className='quote'>"{quote}"</h1>
        </div>
      )
    } else if (contentType == 'text') {
      return (
        <div className='blogpost-item'>
          <h1 className='title'>{title}</h1>
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'audio') {
      return (
        <div className='blogpost-item'>
          <h1 className='title'>{title}</h1>
          <audio controls>
            <source src={attachedFile}></source>
          </audio>
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'photo') {
      return (
        <div className='blogpost-item'>
          <h1 className='title'>{title}</h1>
          <img src={attachedFile} />
          <p>{description}</p>
        </div>
      )
    } else if (contentType == 'video') {
      return (
        <div className='blogpost-item'>
          <h1 className='title'>{title}</h1>
          <video controls src={attachedFile} />
          <p>{description}</p>
        </div>
      )
    }
  }
}

export default BlogpostItem;
