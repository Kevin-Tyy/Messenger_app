"use client";

import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
interface MessageInputProps {
	id: string;
	type?: string;
	required?: boolean;
	placeholder?: string;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}
const MessageInput: React.FC<MessageInputProps> = ({
	id,
	type,
	placeholder,
	errors,
	register,
	required,
}) => {
	return (
		<div className="relative w-full">
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				{...register(id, { required })}
                autoComplete={id}
                className=" text-black font-light py-2 px-4 bg-neutral-100 w-full rounded-full focus:outline-none"
			/>
		</div>
	);
};

export default MessageInput;
