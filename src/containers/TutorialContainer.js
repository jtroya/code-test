import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { optionChanged } from '../actions';
import Tutorial from '../components/Tutorial';

const mapStateToProps = state => ({
  currentStep: state.tutorial.currentStep
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ optionChanged }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Tutorial));
