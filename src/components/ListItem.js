import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import style from './ListItem.module.css';

const ListItem = (props) => {
  const onEditClick = e => {
    props.setEditReview({
      active: true,
      index: props.index,
      review: props.reviewObjects[props.index]
    });
    props.setTabValue(2);
  }

  const onDeleteClick = e => {
    e.preventDefault();
    props.reviewObjects.splice(props.index, 1);
    if (props.reviewObjects.length === 0) {
      localStorage.removeItem("reviews");
      props.setReviewObjects([]);
    }
    else {
      localStorage.setItem("reviews", (props.reviewObjects.join(":::")));
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
            color="primary" 
            aria-label="Edit" 
            onClick={onEditClick}
          >
            <EditIcon />
          </Fab>
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