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
  const [liveValidation, setLiveValidation] = useState(false);

  const [businessName, setBusinessName] = useState(props.editReview.review.businessName);
  const [email, setEmail] = useState(props.editReview.review.email);
  const [rating, setRating] = useState(props.editReview.review.rating);
  const [comments, setComments] = useState(props.editReview.review.comments);
  const [date, setDate] = useState(props.editReview.review.date);

  const [businessNameError, setBusinessNameError] = useState({
    text: "",
    error: false
  });
  const [emailError, setEmailError] = useState({
    text: "",
    error: false
  });
  const [ratingError, setRatingError] = useState({
    text: "",
    error: false
  });
  const [dateError, setDateError] = useState({
    text: "",
    error: false
  });

  const validation = () => {
    let valid = true;

    if (businessName.length < 2) {
      setBusinessNameError({
        text: " - at least 2 characters.",
        error: true
      });
      valid = false;
    }
    else {
      setBusinessNameError({
        text: "",
        error: false
      });
    }

    const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegExp.test(email)) {
      setEmailError({
        text: " - must be a valid email.",
        error: true
      });
      valid = false;
    }
    else {
      setEmailError({
        text: "",
        error: false
      })
    }

    if (rating === "") {
      setRatingError({
        text: " - select a rating.",
        error: true
      });
      valid = false;
    }
    else {
      setRatingError({
        text: "",
        error: false
      });
    }

    if (date === "") {
      setDateError({
        text: " - select a date.",
        error: true
      });
      valid = false;
    }
    else {
      setDateError({
        text: "",
        error: false
      });
    }

    return valid;
  }

  useEffect(() => {
    if (liveValidation) {
      validation();
    }
  }, [businessName, email, rating, date]);

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
    setLiveValidation(true);
    if (validation()) {
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
  }

  const onCancelClick = e => {
    e.preventDefault();
    props.setTabValue(1);
  }

  useEffect(() => {
    if (save) {
      const reviewsArray = (localStorage.getItem("reviews")).split(":::");
      reviewsArray.splice(props.editReview.index, 1);
      reviewsArray.splice(props.editReview.index, 0, JSON.stringify(props.editReview.review));
      localStorage.setItem("reviews", reviewsArray.join(":::"));
      props.setTabValue(1);
    }
  }, [props.editReview]);

  return (
    <div className={style.container}>
      <div className={style.field}>
        <TextField
          label={"Business Name" + businessNameError.text}
          error={businessNameError.error}
          placeholder="Required"
          value={businessName}
          onChange={onBusinessNameChange}
          className={style.input}
        />
      </div>
      <div className={style.field}>
        <TextField
          label={"Email" + emailError.text}
          error={emailError.error}
          placeholder="Required"
          value={email}
          onChange={onEmailChange}
          className={style.input}
        />
      </div>
      <div className={style.field}>
        <FormControl error={ratingError.error} className={style.input}>
          <InputLabel htmlFor="rating">{"Rating" + ratingError.text}</InputLabel>
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
          placeholder="Optional"
          multiline
          value={comments}
          onChange={onCommentsChange}
          className={style.input}
        />
      </div>
      <div className={style.field}>
        <TextField
          label={"Review Date" + dateError.text}
          error={dateError.error}
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