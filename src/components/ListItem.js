import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import style from './ListItem.module.css';

const ListItem = (props) => {
  const onDeleteClick = e => {
    e.preventDefault();
  }

  return (
    <div className={style.container}>
      <Paper className={style.paper}>
        <Typography variant="h4" className={style.businessName}>
          {props.reviewObject.businessName}
        </Typography>
        <Typography component="p" className={style.details}>
          Reviewer: {props.reviewObject.email}
        </Typography>
        <Typography component="p" className={style.details}>
          Rating: {props.reviewObject.rating} Stars
        </Typography>
        <Typography component="p" className={style.details}>
          Comments: {props.reviewObject.comments}
        </Typography>
        <Typography component="p" className={style.details}>
          Review Date: {props.reviewObject.date}
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