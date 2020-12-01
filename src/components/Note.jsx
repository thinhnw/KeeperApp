import React from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function Note(props) {

	console.log(props.id);
	function handleDelete() {
		props.onDelete(props.id);
	}
	return (
		<div className="note">
			<h1 contentEditable>{props.title}</h1>
			<p contentEditable>{props.content}</p>
			<button onClick={handleDelete}>
				<DeleteOutlineIcon />
			</button>
			
		</div>
	)
}
