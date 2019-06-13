import React from 'react';
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

  return (
    <div className={style.container}>
      <div className={style.field}>
        <TextField
          label="Business Name"
          placeholder="Required"
          className={style.input}
        />
      </div>
      <div className={style.field}>
        <TextField
          label="Email"
          placeholder="Required"
          className={style.input}
        />
      </div>
      <div className={style.field}>
        <TextField
          label="Comments"
          multiline
          className={style.input}
        />
      </div>
      <div className={style.field}>
        <TextField
          label="Review Date"
          type="date"
          defaultValue={today}
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
              color="extended" 
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