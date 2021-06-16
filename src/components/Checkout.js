import React, { Fragment, cloneElement, useState } from 'react';
import { deleteItem, addOne, deductOne } from '../redux/actions/cart';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
	ListItemSecondaryAction,
	IconButton,
	Typography,
	Button,
	Box
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

export default function Checkout() {
	const products = useSelector((state) => state.cart);
	const summary = useSelector((state) => state.summary);
	const dispatch = useDispatch();
	const [ proceedToPayment, setProceedToPayment ] = useState(false);

	const removeItem = (index) => {
		dispatch(deleteItem(index));
	};
	const plusItem = (index) => {
		dispatch(addOne(index));
	};
	const minusItem = (index) => {
		if (products[index].item.quantity > 1) {
			dispatch(deductOne(index));
		} else {
			dispatch(deleteItem(index));
		}
	};
	const proceedToCheckout = () => {
		setProceedToPayment(true);
	};
	if (proceedToPayment) {
		return <Redirect to='/final-checkout' />;
	}
	const theme = {
		spacing: 8
	};

	return (
		<Fragment>
			<Box m={2} p={3} justify='center' alignItems='baseline'>
				<List>
					{products.map((product, index) => {
						return cloneElement(
							<ListItem>
								<ListItemAvatar>
									<Avatar src={product.item.image} />
								</ListItemAvatar>
								<ListItemText primary={product.item.description} />
								<IconButton onClick={() => minusItem(index)} >
									<RemoveIcon />
								</IconButton>
								<ListItemText primary={product.item.quantity} />
								<IconButton onClick={() => plusItem(index)} >
									<AddIcon />
								</IconButton>
								<ListItemSecondaryAction>
									<IconButton onClick={() => removeItem(index)} edge='end' aria-label='delete'>
										<DeleteIcon />
									</IconButton>
								</ListItemSecondaryAction>
							</ListItem>,
							{ key: index }
						);
					})}
				</List>
				<Typography variant='h4' gutterBottom>
					Summary: {summary}$
				</Typography>
				<Button onClick={() => proceedToCheckout()}>Proceed to checkout</Button>
			</Box>
		</Fragment>
	);
}
