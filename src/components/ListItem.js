import React from 'react';

const ListItem = (props) => {

  return (
    <div>
      {props.reviewObject.businessName}
      {props.reviewObject.email}
      {props.reviewObject.rating}
      {props.reviewObject.comments}
      {props.reviewObject.date}
    </div>
  );
}

export default ListItem;