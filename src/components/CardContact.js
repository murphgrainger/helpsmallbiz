import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import LanguageIcon from '@material-ui/icons/Language';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import BusinessIcon from '@material-ui/icons/Business';

import image from '../assets/images/tennyson-st.jpg';


export default function CardContact(props) {

  return (
    <Card className="card-fullWidth">
      <CardContent>
        <BusinessIcon/>
      <Typography gutterBottom variant="h5" component="h2">
         {props.info.businessName}
       </Typography>
       <Typography variant="body2" color="textSecondary" component="p">
         {props.info.businessAddress}
       </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.info.challenge}
        </Typography>
      </CardContent>
    </Card>
  );
}
