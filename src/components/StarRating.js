import { FaStarHalfAlt, FaStar } from 'react-icons/fa';
import { FiStar } from 'react-icons/fi';

const StarRating = ({ rating }) => {
  // rating =3.2
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      // stars.push(<i key={i} className="fas fa-star text-warning"></i>);
      stars.push(<FaStar key={i} className="icon-style text-amber-400" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      // stars.push(<i key={i} className="fas fa-star-half-alt text-warning"></i>);
      stars.push(
        <FaStarHalfAlt key={i} className="icon-style text-amber-400" />
      );
    } else {
      // stars.push(<i key={i} className="far fa-star text-warning"></i>);
      stars.push(<FiStar key={i} className="icon-style text-amber-400" />);
    }
  }
  return <>{stars}</>;
};
export default StarRating;
