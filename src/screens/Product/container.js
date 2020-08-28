import { connect } from 'react-redux';
import Product from '.';
import { addProductToFavorites, removeProductFromFavorites } from '../../actions/favorites';

const mapStateToProps = state => ({
	favorites: state.favorites,
});

const mapDispacthToProps = {
	addProductToFavorites,
	removeProductFromFavorites,
};

export default connect(mapStateToProps, mapDispacthToProps)(Product);
