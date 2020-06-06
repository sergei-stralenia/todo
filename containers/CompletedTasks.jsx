import { connect } from 'react-redux';

import { undoTask, deleteTask } from '../store/actions';
import CompletedTasks from '../components/CompletedTasks';

const mapStateToProps = state => {
  return {
    tasks: state.todo.completedTasks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleUndo: task => dispatch(undoTask(task)),
    handleDelete: task => dispatch(deleteTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletedTasks);