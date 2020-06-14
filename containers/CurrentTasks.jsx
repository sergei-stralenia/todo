import { connect } from 'react-redux';

import { completeTask } from '../store/actions';
import CurrentTasks from '../components/CurrentTasks';

const mapStateToProps = state => {
  return {
    tasks: state.todo.currentTasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleComplete: task => dispatch(completeTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentTasks);