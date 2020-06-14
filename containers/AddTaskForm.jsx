import { connect } from 'react-redux';
import { addTask } from '../store/actions';

import AddTaskForm from '../components/AddTaskForm';

const mapDispatchToProps = dispatch => {

  return {
    handleAdd: taskName => dispatch(addTask(taskName)),
  };
};

export default connect(null, mapDispatchToProps)(AddTaskForm);
