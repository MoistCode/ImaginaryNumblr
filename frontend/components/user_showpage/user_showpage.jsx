import React from 'react';

class UserShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch username, blogposts, and profile picture here
  }

  componentWillReceiveProps(nextProps) {
    // checks if current :userId is == to nextprops's :userId
    // Refetch user/blogpost information if it is not the same
  }

  render() {
    // Create an if statement that returns a loading screen if the fetching has
    // not been done yet

    // Also create a condition where if there is no user by that id

    return (

    )
  }

}

export default UserShowPage;
