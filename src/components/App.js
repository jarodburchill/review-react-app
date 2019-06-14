import React, {useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddPage from './AddPage';
import ListPage from './ListPage';
import style from './App.module.css'

const App = () => {
  const [review, setReview] =useState("");

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const getListReviewsTab = () => {
    if (localStorage.getItem("reviews") !== null) {
      return (
        <Tab label="List Reviews" className={style.tab} />
      );      
    }
  }

  return (
    <>
      <Tabs
        value={value} 
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Add Review" className={style.tab} />
        {getListReviewsTab()}
      </Tabs>
      {value === 0 && <AddPage review={review} setReview={setReview} setTabValue={setValue} />}
      {value === 1 && <ListPage review={review} setReview={setReview} setTabValue={setValue} />}
    </>
  );
}

export default App;