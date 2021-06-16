import React, { Fragment, cloneElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography } from '@material-ui/core';

export default function Final() {
	const products = useSelector((state) => state.cart);
	const summary = useSelector((state) => state.summary);
	return (
		<Fragment>
			<List>
				{products.map((product, index) => {
					return cloneElement(
						<ListItem>
							<ListItemAvatar>
								<Avatar src={product.item.image} />
							</ListItemAvatar>
							<ListItemText primary={product.item.description} />

							<ListItemText primary={product.item.quantity} />
						</ListItem>,
						{ key: index }
					);
				})}
			</List>
			<Typography variant='h4' gutterBottom>
				Summary: {summary}$
			</Typography>
		</Fragment>
	);
}
