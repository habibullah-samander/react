import { useContext } from 'react';
import FeedbackItem from './FeedbackItem';

import FeedbackContext from './context/FeedbackContext';
function FeedbackList() {
  const { feedback } = useContext(FeedbackContext);
  // Here we import feedback from the context instead of passing it to FeedbackList component
  if (!feedback || feedback.length === 0) return <p>No Feedback</p>;

  return (
    <div className='feedback-list'>
      {feedback.map((item, idx) => (
        <FeedbackItem key={item.id || idx} item={item}></FeedbackItem>
      ))}
    </div>
  );
}

export default FeedbackList;
