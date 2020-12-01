import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

export default function CreateArea(props) {

	const [ isExpanded, setExpanded ] = React.useState(false);

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
	function expand() {
		setExpanded(true);
	}
	return (
		<div>
			<form className="create-note" onSubmit={handleSubmit}>
				{ 
					isExpanded && 
					<input 
						onChange={handleChange} 
						value={note.title} 
						type="text"
						name="title" 
						placeholder="Title" 
						display="none"
					/> 
				}
				<textarea 
					onClick={expand}
					onChange={handleChange} 
					value={note.content} 
					name="content" 
					placeholder="Take a note..." 
					rows={ isExpanded ? 3 : 1 }>
				</textarea>
				<Zoom in={isExpanded}>
					<Fab type="submit">
						<AddIcon />
					</Fab>
				</Zoom>
				
			</form>
		</div>
	)
}
