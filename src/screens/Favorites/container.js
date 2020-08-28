import { connect } from 'react-redux';
import Favorites from '.';

const mapStateToProps = state => ({
	favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
