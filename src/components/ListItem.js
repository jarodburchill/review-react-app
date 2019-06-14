import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import style from './ListItem.module.css';

const ListItem = (props) => {
  const onDeleteClick = e => {
    e.preventDefault();
    const updatedObjects = props.reviewObjects;
    updatedObjects.splice(props.index, 1);
    if (updatedObjects.length === 0) {
      localStorage.removeItem("reviews");

      //weird, but works
      props.setReviewObjects([]);
    }
    else {
      localStorage.setItem("reviews", (updatedObjects.join(":::")));
    }
  }

  return (
    <div className={style.container}>
      <Paper className={style.paper}>
        <Typography variant="h4" className={style.businessName}>
          {props.review.businessName}
        </Typography>
        <Typography component="p" className={style.details}>
          Reviewer: {props.review.email}
        </Typography>
        <Typography component="p" className={style.details}>
          Rating: {props.review.rating} Stars
        </Typography>
        <Typography component="p" className={style.details}>
          Comments: {props.review.comments}
        </Typography>
        <Typography component="p" className={style.details}>
          Review Date: {props.review.date}
        </Typography>
        <div className={style.button}>
          <Fab 
            color="secondary" 
            aria-label="Delete" 
            onClick={onDeleteClick}
          >
            <DeleteIcon />
          </Fab>
        </div>
      </Paper>
    </div>
  );
}

export default ListItem;