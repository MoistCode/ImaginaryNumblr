import React from 'react';

class BlogPostCreationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this._generateState(this.props.contentType);
    debugger;
  }

  closeModal() {

  }

  render() {
    return (
      <div className='creation-modal'>
        <div className='creation-form'>

          <h2>{this.state.contentType}</h2>
          <i
            onClick={this.props.showDashboard}
            className="fa fa-close"></i>
          <form>
              <textarea></textarea>
              <button>Submit</button>
          </form>

        </div>
      </div>
    )
  }

_generateState(contentType) {
  if (contentType != 'text' && contentType != 'quote') {
    return {
      title: '',
      contentType,
      description: '',
    }
  } else if (contentType == 'quote') {
    return {
      title: '',
      quote: ''
    }
  } else {
    return {
      title: '',
      description: '',
    }
  }
}

}

export default BlogPostCreationForm;
