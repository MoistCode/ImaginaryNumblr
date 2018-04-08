import React from 'react';

class BlogPostCreationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this._generateState(this.props.contentType);
    this.dragElement = this.dragElement.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleVideoChange = this._handleVideoChange.bind(this);
    this._handleAudioChange = this._handleAudioChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('blogpost[title]', this.state.title);
    formData.append('blogpost[content_type]', this.state.content_type);
    if(this.state.content_type != 'quote' && this.state.content_type != 'text') {
      formData.append('blogpost[description]]', this.state.description);
      formData.append('blogpost[attached_file]', this.state.attached_file);
    } else if (this.state.content_type == 'quote') {
      formData.append('blogpost[quote]', this.state.quote);
    } else {
      formData.append('blogpost[description]]', this.state.description);
    }
    this.props.createBlogpost(formData).then(() => {
      window.location.reload();
      this.props.history.push('/dashboard');
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    }
  }

  componentDidMount() {
    this.dragElement(document.getElementById(("creation-modal")));
  }

  render() {
    return (
        <div id='creation-modal'>
          <div className='w3-container w3-center w3-animate-opacity'>
          <div id='creation-form'>
            <h2>Create {this.state.content_type.charAt(0).toUpperCase() + this.state.content_type.slice(1)}</h2>
            <i
              onClick={this.props.showDashboard}
              className="fa fa-close"></i>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <label>Title
                <input
                  type='text'
                  value={this.state.title}
                  onChange={this.update('title')} />
              </label>
              {this._generateForm(this.props.contentType)}
              <button>Submit</button>
            </form>

          </div>

        </div>

      </div>
    )
  }

  _generateForm(contentType) {
    switch(contentType) {
      case 'quote':
        return (
          <div>
            <label>Quote
              <input
                type='text'
                value={this.state.quote}
                onChange={this.update('quote')} />
            </label>
          </div>
        )
      case 'text':
        return (
          <div>
            <label>Description
              <textarea
                value={this.state.description}
                onChange={this.update('description')} />
            </label>
          </div>
        )
      case 'audio':
        return (
          <div>
            <input
              type='file'
              onChange={this._handleAudioChange} />
            <label>Description
              <textarea
                value={this.state.description}
                onChange={this.update('description')} />
            </label>
          </div>
        )
      case 'photo':
        return (
          <div>
            <img src={this.state.photo} />
            <input
              type='file'
              onChange={this._handleImageChange} />
            <label>Description
              <textarea
                value={this.state.description}
                onChange={this.update('description')} />
            </label>
          </div>
        )
      case 'video':
        return (
          <div>
            <label>Description
              <input
                type='file'
                onChange={this._handleVideoChange} />
              <textarea
                value={this.state.description}
                onChange={this.update('description')} />
            </label>
          </div>
        )
    }
  }

  _handleAudioChange(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () => {
      this.setState({ attached_file: file, audio: reader.result });
    }

    if (file) {
      reader.readAsDataURL(file)
    } else {
      this.setState({ attached_file: '', audio: '' })
    }

  }

  _handleVideoChange(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () => {
      this.setState({ attached_file: file, video: reader.result });
    }

    if (file) {
      reader.readAsDataURL(file)
    } else {
      this.setState({ attached_file: '', video: '' })
    }

  }

  _handleImageChange(e) {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () => {
      this.setState({ attached_file: file, photo: reader.result });
    }

    if (file) {
      reader.readAsDataURL(file)
    } else {
      this.setState({ attached_file: '', photo: '' })
    }

  }

  _generateState(contentType) {
    if (contentType == 'quote') {
      return {
        title: '',
        quote: '',
        content_type: contentType,
        attached_file: ''
      }
    } else if (contentType != 'text') {
        return {
          title: '',
          description: '',
          content_type: contentType,
          attached_file: ''
        }
    } else {
        return {
          title: '',
          description: '',
          content_type: contentType,
          [contentType]: ''
        }
    }
  }

  // https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_draggable
  // Messed around with it but credit goes to the site below

  dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}











export default BlogPostCreationForm;
