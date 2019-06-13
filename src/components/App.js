import React, {useState} from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddPage from './AddPage';
import ListPage from './ListPage';
import SettingsPage from './SettingsPage'
import style from './App.module.css'

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
        <Tab label="List Reviews" className={style.tab} />
        <Tab label="Settings" className={style.tab} />
      </Tabs>
      {value === 0 && <AddPage />}
      {value === 1 && <ListPage />}
      {value === 2 && <SettingsPage />}
    </>
  );
}

export default App;