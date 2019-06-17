import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'
import style from './ListItem.module.css';
import fiveStar from '../img/5star.png';
import fourStar from '../img/4star.png';
import threeStar from '../img/3star.png';
import twoStar from '../img/2star.png';
import oneStar from '../img/1star.png';

const ListItem = (props) => {
  const onEditClick = e => {
    props.setEditReview({
      active: true,
      index: props.index,
      review: JSON.parse(props.reviewObjects[props.index])
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

  const getStars = () => {
    switch (props.review.rating) {
      case 1:
        return (
          <img src={oneStar} alt="1 star rating" className={style.image} />
        );
      case 2:
        return (
          <img src={twoStar} alt="2 star rating" className={style.image} />
        );
      case 3:
        return (
          <img src={threeStar} alt="3 star rating" className={style.image} />
        );
      case 4:
        return (
          <img src={fourStar} alt="4 star rating" className={style.image} />
        );
      case 5:
        return (
          <img src={fiveStar} alt="5 star rating" className={style.image} />
        );
      default:
        break;
    }
  }

  return (
    <div className={style.container}>
      <Paper className={style.paper}>
        <Typography variant="h4" className={style.businessName}>
          {props.review.businessName}
        </Typography>
        {getStars()}
        <hr className={style.row} />
        <Typography component="p" className={style.details}>
          Reviewer: {props.review.email}
        </Typography>
        <Typography component="p" className={style.details}>
          Comments: {props.review.comments}
        </Typography>
        <Typography component="p" className={style.details}>
          Review Date: {props.review.date}
        </Typography>
        <div className={style.buttonGroup}>
          <div className={style.button}>
            <Fab 
              color="primary" 
              aria-label="Edit" 
              onClick={onEditClick}
            >
              <EditIcon />
            </Fab>
          </div>
          <div className={style.button}>
            <Fab 
              color="secondary" 
              aria-label="Delete" 
              onClick={onDeleteClick}
            >
              <DeleteIcon />
            </Fab>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default ListItem;