// I got my card componet from this website:
// https://mui.com/material-ui/react-card/
import "./App";
import "./BakeryItem.css";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function BakeryItem({item, handleCount, stuff}) {
    return (
        <div class="Item">
            <Card sx={{ maxWidth: 250 }} >
                <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                        Price: ${item.price} |  Rating: {item.rating}/5.0
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                        Types: {item.category}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                    Dietary Restrictions: {item.category2}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                </CardContent>
                <CardActions class="addRemove">
                    <button onClick={() => {
                        if (stuff.includes(item.name)) {
                            handleCount(-item.price,item.name,false)
                        }
                        else {
                            handleCount(item.price,item.name,true)
                        }
                    }}>
                        { stuff.includes(item.name) ? "Remove" : "Add"}
                    </button>
                </CardActions>
            </Card>
        </div>
    );
}

export default BakeryItem;