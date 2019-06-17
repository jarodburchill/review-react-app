import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import style from './AddEditPage.module.css';

const AddPage = (props) => {
  const [liveValidation, setLiveValidation] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [date, setDate] = useState(props.today);

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
        text: " - must be at least 2 characters.",
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

    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

  const onAddClick = e => {
    setLiveValidation(true);
    if (validation()) {
      e.preventDefault();
      props.setReview({
        businessName: businessName,
        email: email,
        rating: rating,
        comments: comments,
        date: date
      });
      resetForm();
    }
  }

  const onClearClick = e => {
    e.preventDefault();
    resetForm();
  }

  const resetForm = () => {
    setBusinessName("");
    setEmail("");
    setRating("");
    setComments("");
    setDate(props.today);
  }

  useEffect(() => {
    props.setEditReview({
      active: false,
      index: null,
      review: null
    });

    if (props.review !== "") {
      if (localStorage.getItem("reviews") === null) {
        localStorage.setItem("reviews", JSON.stringify(props.review));
      }
      else {
        const reviews = localStorage.getItem("reviews");
        localStorage.setItem("reviews", reviews + ":::" + JSON.stringify(props.review));
      }
      props.setReview("");
      props.setTabValue(1);
    }
  }, [props.review]);

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
              aria-label="Add"
              onClick={onAddClick}
            >
              <AddIcon />
            </Fab>
          </div>
          <div className={style.button}>
            <Fab 
              color="secondary" 
              aria-label="Clear" 
              onClick={onClearClick}
            >
              <ClearIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPage;