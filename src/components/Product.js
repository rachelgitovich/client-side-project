import React, { useState, useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';

import {
	Button,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	CardActionArea,
	Typography,
	TextField,
	Dialog,
	DialogActions,
	DialogTitle
} from '@material-ui/core';
import { addToCart } from '../redux/actions/cart';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const useStyles = makeStyles({
	root: {
		maxWidth: 345
	},
	media: {
		height: 140
	}
});

export default function MediaCard({ image, description, price }) {
	const [ quantity, setQuantity ] = useState(0);
	const classes = useStyles();
	const dispatch = useDispatch();
	const [ open, setOpen ] = useState(false);

	const addItemToCart = () => {
		if (quantity) dispatch(addToCart({ item: { image, description, quantity, price } }));
		else {
			setOpen(true);
		}
	};

	return (
		<Fragment>
			<Dialog
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{'You should enter a quantity first'}</DialogTitle>

				<DialogActions>
					<Button onClick={() => setOpen(false)} color='secondary'>
						Ok
					</Button>
				</DialogActions>
			</Dialog>
			<Popup
				trigger={
					<Card className={classes.root}>
						<CardActionArea>
							<CardMedia className={classes.media} image={image} title='Contemplative Reptile' />
							<CardContent>
								<Typography gutterBottom variant='h5' component='h2'>
									{description}
								</Typography>
								<Typography gutterBottom variant='h5' component='h2'>
									{price}$
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<TextField
								id='outlined-basic'
								label='Quantity'
								variant='outlined'
								color='secondary'
								size='small'
								onChange={(e) => setQuantity(e.target.value)}
							/>
							<Button variant='contained' color='secondary' size='small' onClick={() => addItemToCart()}>
								Add to cart
							</Button>
						</CardActions>
					</Card>
				}
				modal
				nested
			>
				<Card className={classes.root}>
					<CardActionArea>
						<CardMedia className={classes.media} image={image} title='Contemplative Reptile' />
						<CardContent>
							<Typography gutterBottom variant='h5' component='h2'>
								{description}
							</Typography>
							<Typography gutterBottom variant='h5' component='h2'>
								{price}$
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions>
						<TextField
							id='outlined-basic'
							label='Quantity'
							variant='outlined'
							color='secondary'
							size='small'
							onChange={(e) => setQuantity(e.target.value)}
						/>
						<Button variant='contained' color='secondary' size='small' onClick={() => addItemToCart()}>
							Add to cart
						</Button>
					</CardActions>
				</Card>
			</Popup>
		</Fragment>
	);
}
