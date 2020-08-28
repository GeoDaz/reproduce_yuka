import { connect } from 'react-redux';
import Scan from '.';
import { addProductToHistory } from '../../actions/history';

export default connect(null, { addProductToHistory })(Scan);
