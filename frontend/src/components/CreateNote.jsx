import React, { useEffect, useState } from "react";
import { DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import { MdClose } from "react-icons/md";

const CreateNote = ({ notes, setNotes, isEdit, id, setOpen }) => {
	const note = isEdit ? notes.find((note) => note.id === id) : null;
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [tag, setTag] = useState("");
	const [tags, setTags] = useState([]);

	const handleAddTags = (e) => {
		e.preventDefault();
		setTags([...tags, tag]);
		setTag("");
	};

	useEffect(() => {
		if (isEdit) {
			setTitle(note.title);
			setContent(note.content);
			setTags(note.tags);
		}
	}, [isEdit, note]);

	const handleSaveNote = (e) => {
		e.preventDefault();
		const highestId = notes?.reduce((max, note) => (note.id > max ? note.id : max), 0) || 0;
		const newId = highestId + 1;
		const newNote = {
			id: newId,
			title,
			content,
			tags,
			date: new Date().toISOString(),
			isPinned: false,
		};

		isEdit ? setNotes(notes.map((note) => (note.id === id ? newNote : note))) : setNotes([...notes, newNote]);
		setTitle("");
		setContent("");
		setTags([]);
		setTag("");
		setOpen(false);
	};

	return (
		<DialogContent>
			<form>
				<div className="">
					<label htmlFor="title">Title</label>
					<input
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						id="title"
						name="title"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
					/>
				</div>
				<div className="mt-4">
					<label htmlFor="content">Content</label>
					<textarea
						value={content}
						onChange={(e) => setContent(e.target.value)}
						id="content"
						name="content"
						rows="5"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
					/>
				</div>
				<div className="mt-4">
					<label htmlFor="tags">Tags</label>
					<br />
					{tags?.map((tag, index) => (
						<div key={index} className="inline-block bg-gray-200 rounded-md px-3 py-1 text-sm text-gray-700 mr-2 mb-2">
							# {tag}
							<MdClose className="inline-block ml-2 -mr-2 text-gray-500 hover:text-red-500 cursor-pointer" onClick={() => setTags(tags.filter((t) => t !== tag))} />
						</div>
					))}
					<div className="flex items-center gap-2">
						<input
							value={tag}
							onChange={(e) => setTag(e.target.value)}
							type="text"
							id="tags"
							name="tags"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5"
						/>
						<Button variant="outline" onClick={handleAddTags}>
							Add
						</Button>
					</div>
				</div>
				<div className="mt-4">
					<Button onClick={handleSaveNote} type="submit" className="bg-blue-500 hover:bg-blue-600 w-full">
						Save
					</Button>
				</div>
			</form>
		</DialogContent>
	);
};

export default CreateNote;
