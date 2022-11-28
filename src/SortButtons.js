import "./App";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function SortButtons({handleSort}) {
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Sort By</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Price"
                name="radio-buttons-group"
            >
                <FormControlLabel value="Price" control={<Radio />} label="Price" onClick={()=> {handleSort("Price")}} />
                <FormControlLabel value="Rating" control={<Radio />} label="Rating" onClick={()=> {handleSort("Rating")}} />
            </RadioGroup>
      </FormControl>
    );
}

export default SortButtons;