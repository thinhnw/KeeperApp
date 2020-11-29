import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function CreateArea(props) {
	
	function emptyNote() {
		
		const newId = uuidv4();
		return {
			key: newId, 
			title: "",
			content: "", 
			id: newId
		}
	}
	const [ note, setNote ] = React.useState(emptyNote());
	function handleChange(event) {

		const { name, value } = event.target;
		setNote({
			...note,
			[name]: value
		});
	}
	function handleSubmit(event) {
		
		props.onCreate(note);	
		setNote(emptyNote());
		event.preventDefault();
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} value={note.title} type="text" name="title" placeholder="Title" /> 
				<textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3"></textarea>
				<button type="submit">Add</button>
			</form>
		</div>
	)
}
