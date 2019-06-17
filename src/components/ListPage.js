import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';

const ListPage = (props) => {
  const [reviewObjects, setReviewObjects] = useState([]);

  useEffect(() => {
    props.setEditReview({
      active: false,
      index: null,
      review: null
    });

    if (localStorage.getItem("reviews") !== null) {
      const reviews = localStorage.getItem("reviews");
      setReviewObjects(reviews.split(":::"));
    }
    else {
      props.setTabValue(0);
    }
  }, [reviewObjects]);

  return (
    <div>
      {reviewObjects.map((item, index) => (
        <ListItem
          key={index}
          index={index}
          review={JSON.parse(item)}
          reviewObjects={reviewObjects}
          setReviewObjects={setReviewObjects}
          setTabValue={props.setTabValue}
          setEditReview={props.setEditReview}
        />
      ))}
    </div>
  );
}

export default ListPage;