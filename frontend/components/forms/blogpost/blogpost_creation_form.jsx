import React from 'react';

class BlogPostCreationForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this._generateState(this.props.contentType);
    this.dragElement = this.dragElement.bind(this);
  }

  closeModal() {

  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    this.dragElement(document.getElementById(("creation-modal")));
  }

  render() {
    return (
        <div id='creation-modal'>
          <div className='w3-container w3-center w3-animate-opacity'>
          <div id='creation-form'>
            <h2>{this.state.contentType}</h2>
            <i
              onClick={this.props.showDashboard}
              className="fa fa-close"></i>
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <textarea></textarea>
                <button>Submit</button>
            </form>

          </div>

        </div>

      </div>
    )
  }

  _generateForm() {

  }

  _generateState(contentType) {
    if (contentType == 'quote') {
      return {
        title: '',
        contentType,
        quote: ''
      }
    } else {
      return {
        title: '',
        contentType,
        description: ''
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
