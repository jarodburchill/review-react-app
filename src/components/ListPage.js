import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';

const ListPage = (props) => {
  const [reviewObjects, setReviewObjects] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("reviews") !== null) {
      const reviews = localStorage.getItem("reviews");
      setReviewObjects(reviews.split(":::"));
    }
  }, []);

  return (
    <div>
      {reviewObjects.map((item, index) => (
        <ListItem key={index} index={index} reviewObject={JSON.parse(item)} />
      ))}
    </div>
  );
}

export default ListPage;