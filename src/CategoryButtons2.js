// I got my checkbox button from this website:
// https://mui.com/material-ui/react-checkbox/

import "./App";
import { useState } from "react";
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

function CategoryButtons2({filterCategory, val}) {
    const [booll,setBooll] = useState(true);

    function handleBooll() {
        setBooll(!booll);
    }

    return (
        <FormControl>
            <FormLabel>Category2</FormLabel>
            <div>
                <Checkbox onClick={()=> {
                    if (booll) {
                        filterCategory(val);
                    } else {
                        filterCategory(val+" "+val);
                    }
                    handleBooll(!booll);
                }} /> {val}
            </div>
      </FormControl>
    );
}

export default CategoryButtons2;