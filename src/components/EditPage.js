import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import style from './AddEditPage.module.css';

const EditPage = (props) => {
  console.log(props.editReview);

  const [businessName, setBusinessName] = useState(props.editReview.review.businessName);
  const [email, setEmail] = useState(props.editReview.review.email);
  const [rating, setRating] = useState(props.editReview.review.rating);
  const [comments, setComments] = useState(props.editReview.review.comments);
  const [date, setDate] = useState(props.editReview.review.date);

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
            >
              <AddIcon />
            </Fab>
          </div>
          <div className={style.button}>
            <Fab 
              color="secondary" 
              aria-label="Cancel" 
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