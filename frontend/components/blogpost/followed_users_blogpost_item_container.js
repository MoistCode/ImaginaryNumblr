import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogpostItem from './blogpost';

const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BlogpostItem))
