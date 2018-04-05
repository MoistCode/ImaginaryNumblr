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
    )
  }

  _generateForm() {

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

  dragElement(elmnt) {
    console.log(elmnt);
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}











export default BlogPostCreationForm;
