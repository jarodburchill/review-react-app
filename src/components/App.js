import React, {useState} from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
const App = () => {
  const [value, setValue] = useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div>
      <Tabs
        value={value} 
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Add Review" />
        <Tab label="List Reviews" />
        <Tab label="Settings" />
      </Tabs>
      {value === 0 && <div>Item One</div>}
      {value === 1 && <div>Item Two</div>}
      {value === 2 && <div>Item Three</div>}
    </div>
  );
}

export default App;