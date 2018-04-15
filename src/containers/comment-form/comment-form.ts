import { connect } from 'react-redux';
import { CommentForm } from 'components/comment-form';

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const CommentFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentForm);
