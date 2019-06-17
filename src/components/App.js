import React, {useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddPage from './AddPage';
import ListPage from './ListPage';
import EditPage from './EditPage'
import style from './App.module.css'

const App = () => {
  const [review, setReview] = useState("");
  const [editReview, setEditReview] = useState({
    active: false,
    index: null,
    review: null
  });

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

  const getEditReviewTab = () => {
    if (editReview.active) {
      return (
        <Tab label="Edit Review" className={style.tab} />
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
        {getEditReviewTab()}
      </Tabs>
      {value === 0 && <AddPage review={review} setReview={setReview} setEditReview={setEditReview} setTabValue={setValue} />}
      {value === 1 && <ListPage setEditReview={setEditReview} setTabValue={setValue} />}
      {value === 2 && <EditPage editReview={editReview} />}
    </>
  );
}

export default App;