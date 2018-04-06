import { connect } from 'react-redux';


const mapStateToProps = (state, ownProps) => ({
  userId: ownProps.match.params.userId
});

const mapDispatchToProps = (dispatch) => {
  // fetch blogposts here correlating to :userId
};

export default connect(mapStateToProps, mapDispatchToProps)(UserShowPage)
