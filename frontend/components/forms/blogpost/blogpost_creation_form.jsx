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
      formData.append('blogpost[quote_source]', this.state.quoteSource)
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
            <p>Drag Me :)</p>
            <i
              onClick={() => {
                this.props.showDashboard();
                this.props.clearErrors();
              }}
              className="fa fa-close"></i>
            <form onSubmit={(e) => this.handleSubmit(e)}>
              <input
                type='text'
                placeholder='Title'
                value={this.state.title}
                onChange={this.update('title')}
                style={{ fontSize: '28px' }} />
              {this._generateForm(this.props.contentType)}
              <button>Submit</button>
              {this._generateErrors(this.props.errors)}
            </form>
          </div>
        </div>
      </div>
    )
  }

  _generateErrors(errArr) {
    return errArr.map((err) => <li>{err}</li>)
  }

  _generateForm(contentType) {
    switch(contentType) {
      case 'quote':
        return (
          <div>
              <textarea
                placeholder={"“All mathematicians live in two different worlds."+
                "They live in a crystalline world of perfect platonic forms."+
                "An ice palace. But they also live in the common world where"+
                "things are transient, ambiguous, subject to vicissitudes."+
                "Mathematicians go backward and forward from one world to another."+
                "They’re adults in the crystalline world, infants in the real one.”"}
                value={this.state.quote}
                style={
                  {
                    width: '85%',
                    maxHeight: '450px',
                    fontSize: '34px',
                    fontStyle: 'italic'
                  }
                }
                onChange={this.update('quote')} />
              <input
                type='text'
                value={this.state.quoteSource}
                onChange={this.update('quoteSource')}
                placeholder={"- Sylvain Cappell"} />
          </div>
        )
      case 'text':
        return (
          <div>
              <textarea
                placeholder={
                  "Tell me how your day was.\n" +
                  "What did you do?\n" +
                  "Anything you want to say about climate change?"
                }
                value={this.state.description}
                onChange={this.update('description')} />
          </div>
        )
      case 'audio':
        return (
          <div>
            <audio controls src={this.state.audio} />
            <input
              type='file'
              onChange={this._handleAudioChange} />
              <textarea
                placeholder={
                  "This song is the morning bird songs to my day..."
                }
                value={this.state.description}
                onChange={this.update('description')} />
          </div>
        )
      case 'photo':
        return (
          <div>
            <img src={this.state.photo} />
            <input
              type='file'
              onChange={this._handleImageChange} />
              <textarea
                placeholder={
                  "Not another photo of someone contemplating..."
                }
                value={this.state.description}
                onChange={this.update('description')} />
          </div>
        )
      case 'video':
        return (
          <div>
            <video controls src={this.state.video} />
            <input
              type='file'
              onChange={this._handleVideoChange} />
            <textarea
              placeholder={
                "Today marks the day I started loving math!"
              }
              value={this.state.description}
              onChange={this.update('description')} />
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
        content_type: contentType,
        attached_file: '',
        [contentType]: '',
        quoteSource: ''
      }
    } else if (contentType != 'text') {
        return {
          title: '',
          description: '',
          content_type: contentType,
          attached_file: '',
          [contentType]: ''
        }
    } else {
        return {
          title: '',
          description: '',
          content_type: contentType,
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
