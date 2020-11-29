import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import notes from '../notes';

export default function App() {

	return (
		<div>
			<Header />
			<CreateArea />
			{notes.map((note) => (
					<Note 
						key={note.key}
						title={note.title}
						content={note.content}
					/>
				)
			)}
			<Footer />
		</div>
	)
}
