import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import style from './AddPage.module.css';

const AddPage = () => {
  const dd = String(new Date().getDate()).padStart(2, '0');
  const mm = String(new Date().getMonth() + 1).padStart(2, '0');
  const yyyy = new Date().getFullYear();
  const today = `${yyyy}-${mm}-${dd}` ;

  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [date, setDate] = useState(today);

  const onBusinessNameChange = e => {
    setBusinessName(e.target.value);
  }

  const onEmailChange = e => {
    setEmail(e.target.value);
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
              aria-label="Delete" 
            >
              <DeleteIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPage;