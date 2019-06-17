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
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");
  const [date, setDate] = useState(props.today);

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

  const onDeleteClick = e => {
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
              onClick={onDeleteClick}
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