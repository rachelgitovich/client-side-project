import React, { Fragment, useState, useEffect } from 'react';
import { Redirect } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import {
	Grid,
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
	DialogTitle,
	Box
} from '@material-ui/core';
import Product from './Product';
import Checkout from './Checkout';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		padding: theme.spacing(2)
	}
}));
export default function Products() {
	const classes = useStyles();
	const [ images, setImages ] = useState([
		{
			src:
				'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
			desc: 'Three rings',
			price: 5
		},
		{
			src:
				'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
			desc: 'Pearl necklace',
			price: 10
		},
		{
			src:
				'https://images.unsplash.com/photo-1543295204-2ae345412549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
			desc: 'three blue rings',
			price: 40
		},
		{
			src:
				'https://images.unsplash.com/photo-1603561596112-0a132b757442?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
			desc: 'Gold ring with pink stone',
			price: 8
		},
		{
			src:
				'https://images.unsplash.com/photo-1584377334016-464803e03b80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
			desc: 'Two silver rings',
			price: 60
		},
		{
			src:
				'https://images.unsplash.com/photo-1511253819057-5408d4d70465?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
			desc: 'Two rings on necklace',
			price: 20
		},
		{
			src:
				'https://images.unsplash.com/photo-1550597734-2d270e74b44f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80',
			desc: 'Respectable rings',
			price: 25
		},
		{
			src:
				'https://images.unsplash.com/photo-1591209662757-ab76fb411c70?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGpld2Vscnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			desc: 'Twin ring',
			price: 45
		},
		{
			src:
				'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGpld2Vscnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
			desc: 'Gold & Silver ring',
			price: 75
		}
	]);
	const [ payment, setPayment ] = useState(false);
	const [ checkout, setcheckout ] = useState(false);

	if (checkout) return <Redirect to='/checkout' />;
	const theme = {
		spacing: 8
	};
	return (
		<Fragment>
			<Dialog
				open={payment}
				onClose={() => setPayment(false)}
				aria-labelledby='alert-dialog-title'
				aria-describedby='alert-dialog-description'
			>
				<DialogTitle id='alert-dialog-title'>{'Are you sure?'}</DialogTitle>

				<DialogActions>
					<Button onClick={() => setcheckout(true)} color='primary'>
						Yes
					</Button>
					<Button onClick={() => setPayment(false)} color='primary'>
						No
					</Button>
				</DialogActions>
			</Dialog>

			<Box m={2} p={3}>
				<Grid m={-2} container spacing={5} direction='row' justify='center' alignItems='baseline'>
					{images.map(({ desc, src, price }) => <Product image={src} description={desc} price={price} />)}
				</Grid>
			</Box>
			<Box textAlign='center' m={2}>
				<Button variant='contained' color='secondary' onClick={() => setPayment(true)}>
					checkout
				</Button>
			</Box>
		</Fragment>
	);
}
