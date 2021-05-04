import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width: 210,
      marginBottom: "10px",
      marginRight: "10px",

      "&:nth-child(1)": {
        marginLeft: "20px"
      }
    },
    media: {
      height: 140,
    },
    address: {
        fontSize: "14px"
    },
    cardTitle: {
        marginLeft: "20px"
    },
    currency: {
        marginRight: "2px"
    }
  });

const MediaCard = (props) => {

    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.payload.fields.image.structValue.fields.url.stringValue}
                    title={props.payload.fields.title.stringValue}
                />
                <CardContent>
                    <Typography variant="h6" component="h6">
                    <span className={classes.currency}>$</span>{props.payload.fields.price.stringValue}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" className={classes.address}> 
                    {props.payload.fields.location.structValue.fields.formattedAddress.stringValue}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p"  className={classes.address}>
                    {props.payload.fields.location.structValue.fields.city.stringValue}, {props.payload.fields.location.structValue.fields.state_short.stringValue}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    <a href="https://www.google.com/" target="_blank">Learn More</a>
                </Button>
            </CardActions>
      </Card>
      
    );
}

export default MediaCard;