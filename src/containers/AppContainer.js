import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loadApp } from '../actions';
import App from '../components/App';

const mapStateToProps = state => ({
  showTutorialModal: state.tutorial.showTutorialModal,
  tutorialSkiped: state.tutorial.tutorialSkiped,
  currentStep: state.tutorial.currentStep
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ loadApp }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
