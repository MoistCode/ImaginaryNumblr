<p align="center"> 
  
  <a href="https://imaginarynumblr.herokuapp.com/">
    <img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/app/assets/images/default_user.png">
  </a>
  
   <a href="https://imaginarynumblr.herokuapp.com/">
    <h1 align="center">Imaginary Numblr</h1>
  </a>
  
  <p align="center"><i>"Where nerds use numbers to speak to other nerds"</i></p>
</p>  

  
<h2>About</h2>
  
<p>A website primarily inspired by Tumblr that takes a more mathematical modus operandi! Although the theme may initially come off as favoring only blogs pertaining to mathematics, it actually takes a much deeper approach. Mathematics is everywhere. From the fluid dynamics naturally taken into consideration by Vincent van Gogh when painting <i>Starry Night</i>, to what we all know and love, Calculus. There are absolutely no boundaries for entry and we welcome mathematicians of all levels, even if you <b>dislike</b> mathematics. So sign up, get that painting you've been working on for months or a photo of your dog and get some analysis from our top-notch <b>Numblrs</b>, maybe not of your dogs...dogs are just cute..</p>

<p align='center'>
  <img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/screenie.png">
</p>  

<h2>Technologies</h2>
  
Ruby on Rails|React|Redux|HTML5/CSS3/JavaScript|PostgreSQL|Amazon Web Services S3
:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:|:-------------------------:
<img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/Webp.net-resizeimage%20(2).png">|<img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/Webp.net-resizeimage.png">|<img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/Webp.net-resizeimage%20(1).png">|<img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/Webp.net-resizeimage(4).png">|<img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/Webp.net-resizeimage%20(3).png">|<img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/Webp.net-resizeimage%20(5).png">

<h2>Features</h2>

- [Creating a post](#post-creation)
- [Editing and deleting a post](#post-edit-delete)
- [Following a user](#user-follows)
- [Liking a post](#post-likes)
- [Project direction](#project-direction)

<a name="post-creation">
  <h4 align='center'>
      <img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/app/assets/images/favicon.png">
       Post Creation
  </h4>
</a>
  Navigate seamlessly as creation is automatically updated and refreshed to show the most recently updated posts on your dashboard. Preview your uploaded items before creating them. No one likes those broken links...yuck... Currently supported types are quotes, long texts, audios, videos, and photos.

<p align='center'>
  <br />
  <img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/Creation%20bar.gif">
</p>  

``` javascript
  render() {
    return (
        <div id='creation-modal'>
          <div
            className='w3-container w3-center w3-animate-opacity'>
          <div id='creation-form'>
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
              <button
                type='submit'
                className='create-submit-button'>Submit</button>
              {this._generateErrors(this.props.errors)}
            </form>
          </div>
        </div>
        {this._addEnterEventListener()}
      </div>
    )
  }

  _addEnterEventListener() {
    $('form').keypress(function (e) {
      if (e.which == 13) {
        $('form').submit();
        return false;
      }
    });
  }
```

***
<a name="post-edit-delete">
  <h4 align='center'>
    <img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/app/assets/images/favicon.png">
    Post Edition/Deletion
  </h4>  
</a>
  With the power of React's state, we can create, edit, delete, etc., without ever having to refresh to see the updates! This is done by manipulating the state of the current component which trickles an avalache effect where React compares the changes to the previous information and make changes as necessary.
<p align='center'>
  <br />
  <img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/edit%20delete.gif">
</p>  

***
<a name="user-follows">
  <h4 align='center'>
    <img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/app/assets/images/favicon.png">
    User Follows
  </h4>
</a>
  Following a user allows access to every post associated with that user in real time. If you were to ever unfollow a user, your dash would instantly remove all their posts from your dashboard.
<p align='center'>
  <br />
  <img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/unfollow.gif">  
</p>


***
<a name="post-likes">
  <h4 align='center'>
    <img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/app/assets/images/favicon.png">
    Post Likes
  </h4>
</a>
  Enjoy a post? By liking a post, you will not only show appreciation for the author but will also save that post for future reference for everlasting entertainment!
<p align='center'>
  <br />
  <img src="https://github.com/MoistCode/ImaginaryNumblr/blob/master/readme_gifs/like.gif">  
</p>

***
<a name="project-direction">
  <h2>Project Direction</h2>
</a>

* Chatting with other users
* Allowing users to choose a theme for their show page
* User settings (i.e., option to change password, username, profile picture)
* Reblogs and shares
* Messaging
* Tags to improve recommendation algorithm
* LaTeX integration
