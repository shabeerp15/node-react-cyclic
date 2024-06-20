import { Button } from "../components/ui/button";
import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import NoteCard from "../components/NoteCard";
import { Dialog, DialogTrigger } from "../components/ui/dialog";
import CreateNote from "../components/CreateNote";

const data = [];
const Home = () => {
	const [open, setOpen] = useState(false);
	const [notes, setNotes] = useState(data.sort((a, b) => b.isPinned - a.isPinned));

	const handlePinNote = (id) => {
		const newNotes = notes.map((note) => {
			if (note.id === id) {
				note.isPinned = !note.isPinned;
			}
			return note;
		});
		setNotes(newNotes.sort((a, b) => b.isPinned - a.isPinned));
	};

	const handleDelete = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	console.log(notes);

	return (
		<div className="">
			{!notes.length && (
				<div className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] w-full">
					<di className="flex flex-col items-center justify-center w-[700px]">
						<GiNotebook className="text-[300px] text-gray-200" />
						<p className="text-md text-black text-center mx-10 mt-3">Start creating your first note! Click the 'Add' button to jot down your thoughts, ideas and reminders. Let's get started!</p>
					</di>
				</div>
			)}

			<div className="grid grid-cols-3 gap-4">
				{notes.map((note, index) => (
					<NoteCard key={index} {...note} onDelete={() => handleDelete(note.id)} onPinNote={() => handlePinNote(note.id)} notes={notes} setNotes={setNotes} setOpen={setOpen} />
				))}
			</div>

			<Dialog open={open} onOpenChange={setOpen}>
				<DialogTrigger className="">
					<Button className="absolute right-10 bottom-10 bg-blue-500 hover:bg-blue-600">
						<MdAdd className="text-white text-[32px]" />
					</Button>
				</DialogTrigger>
				<CreateNote notes={notes} setNotes={setNotes} setOpen={setOpen} />
			</Dialog>
		</div>
	);
};
export default Home;
