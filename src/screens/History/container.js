import { connect } from 'react-redux';
import History from '.';

const mapStateToProps = state => ({
	history: state.history,
});

export default connect(mapStateToProps)(History);
