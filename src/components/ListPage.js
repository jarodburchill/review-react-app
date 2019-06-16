import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';

const ListPage = (props) => {
  const [reviewObjects, setReviewObjects] = useState([]);

  useEffect(() => {
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
        />
      ))}
    </div>
  );
}

export default ListPage;