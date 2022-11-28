// I got my radio Group button from this website:
// https://mui.com/material-ui/react-radio-button/

import "./App";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function CategoryButtons({filterCategory}) {
    return (
        <FormControl>
            <FormLabel>Category1</FormLabel>
            <RadioGroup defaultValue="All">
                <FormControlLabel value="All" control={<Radio />} label="All" onClick={()=> {filterCategory("All")}} />
                <FormControlLabel value="Bread" control={<Radio />} label="Bread" onClick={()=> {filterCategory("Bread")}} />
                <FormControlLabel value="Cake" control={<Radio />} label="Cake" onClick={()=> {filterCategory("Cake")}} />
                <FormControlLabel value="Cookie" control={<Radio />} label="Cookie" onClick={()=> {filterCategory("Cookie")}} />
            </RadioGroup>
      </FormControl>    
    );
}

export default CategoryButtons;