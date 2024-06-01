
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import StarRating from './StarRatings.module.css'
export default function StarRatings({ ratings }) {
  const rate = Array.from({ length: 5 }, (elememt, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {ratings >= index + 1 
          ? <BsStarFill/>
          : ratings >= number
          ? <BsStarHalf/>
          : <BsStar/>}
      </span>
    );
  });

  return (
    <div className={StarRating.div}>
        {rate}
    </div>
  )
}