import React from 'react';

export default function CreateArea() {
	
	const [ note, setNote ] = React.useState({
		title: "",
		content: ""
	});
	function handleChange(event) {

		const { name, value } = event.target;
		setNote({
			...note,
			[name]: value
		});
	}
	function handleSubmit(event) {
		
		
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
