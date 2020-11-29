import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
	
	const newId = uuidv4();
	const [ notes, setNotes ] = React.useState([{

		key: newId,  
		title: "Note title",
		content: "Note content", 
		id: newId
	}]);
	
	function addNote(note) {
		setNotes([...notes, note])
	}
	function deleteNote(id) {
		setNotes(notes.filter(note => {
			console.log(note.id, id);
			return note.id !== id;
		}))
	}
	return (
		<div>
			<Header />
			<CreateArea onCreate={addNote}/>
			{notes.map((note) => {
		
				return <Note 
						key={note.key}
						id={note.key}
						title={note.title}
						content={note.content}
						onDelete={deleteNote}
					/>
			})}
			<Footer />
		</div>
	)
}
