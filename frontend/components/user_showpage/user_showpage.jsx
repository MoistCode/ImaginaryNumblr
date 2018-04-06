import React from 'react';


class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch username, blogposts, and profile picture here
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user.id != nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }


  render() {
    if (this.props.user == 'none') {
      return (
        <p>Loading...</p>
      )
    }

    const viewUser = this.props.user
    // Create an if statement that returns a loading screen if the fetching has
    // not been done yet

    // Also create a condition where if there is no user by that id
    return (
      <div className='user-showpage'>
        <div className='user-info'>
          <img
            src={viewUser.profileImageUrl}
            style={{ 'width': '100px', 'height': '100px' }}>

          </img>
        </div>
        <div className='user-blogs'>
        </div>
      </div>
    )
  }

}

export default UserShowPage;