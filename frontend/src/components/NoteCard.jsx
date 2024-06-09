import React from "react";
import { MdPushPin, MdDelete, MdCreate } from "react-icons/md";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Dialog, DialogTrigger } from "./ui/dialog";
import CreateNote from "./CreateNote";

const NoteCard = ({ id, title, content, date, tags, isPinned, onDelete, onPinNote, notes, setNotes, setOpen }) => {
	return (
		<div>
			<Card className="hover:shadow-lg">
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardTitle>{title}</CardTitle>
						<MdPushPin className={`${isPinned ? "text-blue-500" : "text-gray-500"} cursor-pointer`} onClick={onPinNote} />
					</div>
					<p className="text-sm text-gray-400">{date}</p>
					<CardDescription>
						{content?.slice(0, 60)}
						{content?.length > 60 ? "..." : ""}
					</CardDescription>
				</CardHeader>
				<CardContent className="flex items-center justify-between">
					<div>
						{tags?.map((tag) => (
							<span key={tag} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700 mr-2 ">
								#{tag}
							</span>
						))}
					</div>
					<div className="flex items-center gap-2">
						<Dialog>
							<DialogTrigger className="">
								<MdCreate className="text-gray-500 hover:text-blue-500 cursor-pointer" />
							</DialogTrigger>
							<CreateNote notes={notes} setNotes={setNotes} isEdit={true} id={id} setOpen={setOpen} />
						</Dialog>
						<MdDelete className="text-gray-500 hover:text-red-500 cursor-pointer" onClick={onDelete} />
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default NoteCard;
