import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import style from './AddEditPage.module.css';

const EditPage = (props) => {
  const [businessName, setBusinessName] = useState(props.editReview.review.businessName);
  const [email, setEmail] = useState(props.editReview.review.email);
  const [rating, setRating] = useState(props.editReview.review.rating);
  const [comments, setComments] = useState(props.editReview.review.comments);
  const [date, setDate] = useState(props.editReview.review.date);

  const [save, setSave] = useState(false);

  const onBusinessNameChange = e => {
    setBusinessName(e.target.value);
  }

  const onEmailChange = e => {
    setEmail(e.target.value);
  }

  const onRatingChange = e => {
    setRating(e.target.value);
  }

  const onCommentsChange = e => {
    setComments(e.target.value);
  }

  const onDateChange = e => {
    setDate(e.target.value);
  }

  const onSaveClick = e => {
    e.preventDefault();
    props.setEditReview({
      active: true,
      index: props.editReview.index,
      review: {
        businessName: businessName,
        email: email,
        rating: rating,
        comments: comments,
        date: date
      }
    });
    setSave(true);
  }

  const onCancelClick = e => {
    e.preventDefault();
    props.setTabValue(1);
  }

  useEffect(() => {
    if (save) {
      if (localStorage.getItem("reviews") === null) {
        localStorage.setItem("reviews", JSON.stringify(props.editReview.review));
      }
      else {
        const reviews = localStorage.getItem("reviews");
        localStorage.setItem("reviews", reviews + ":::" + JSON.stringify(props.editReview.review));
      }
      props.setTabValue(1);
    }
  }, [props.editReview]);

  return (
    <div className={style.container}>
      <div className={style.field}>
        <TextField
          label="Business Name"
          placeholder="Required"
          value={businessName}
          onChange={onBusinessNameChange}
          className={style.input}
        />
      </div>
      <div className={style.field}>
        <TextField
          label="Email"
          placeholder="Required"
          value={email}
          onChange={onEmailChange}
          className={style.input}
        />
      </div>
      <div className={style.field}>
        <FormControl className={style.input}>
          <InputLabel htmlFor="rating">Rating</InputLabel>
          <Select
            value={rating}
            onChange={onRatingChange}
            inputProps={{
              name: 'rating',
              id: 'rating',
            }}
          >
            <MenuItem value={1}>One Star</MenuItem>
            <MenuItem value={2}>Two Stars</MenuItem>
            <MenuItem value={3}>Three Stars</MenuItem>
            <MenuItem value={4}>Four Stars</MenuItem>
            <MenuItem value={5}>Five Stars</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={style.field}>
        <TextField
          label="Comments"
          multiline
          value={comments}
          onChange={onCommentsChange}
          className={style.input}
        />
      </div>
      <div className={style.field}>
        <TextField
          label="Review Date"
          type="date"
          value={date}
          onChange={onDateChange}
          InputLabelProps={{
            shrink: true,
          }}
          className={style.input}
        />
      </div>
      <div className={style.buttonContainer}>
        <div className={style.buttonGroup}>
          <div className={style.button}>
            <Fab 
              color="primary" 
              aria-label="Save"
              onClick={onSaveClick}
            >
              <SaveIcon />
            </Fab>
          </div>
          <div className={style.button}>
            <Fab 
              color="secondary" 
              aria-label="Cancel"
              onClick={onCancelClick}
            >
              <CancelIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPage;