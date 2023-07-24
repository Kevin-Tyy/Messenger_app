"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import { useState, useCallback } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
	const [variant, setVariant] = useState<Variant>("LOGIN");
	const [loading, setLoading] = useState<boolean>(false);
	const toggleVariant = useCallback(() => {
		setVariant(variant === "LOGIN" ? "REGISTER" : "LOGIN");
	}, [variant]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FieldValues>({
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		setLoading(true);
		if (variant === "LOGIN") {
			// next auth sign in
		}
		if (variant === "REGISTER") {
			// register a new user
		}
	};
	const socialAction = (action: string) => {
		setLoading(true);
		//side in with next auth providers
	};
	return (
		<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
			<div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
				<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
					{variant === "REGISTER" && (
						<Input id="name" label="Name" register={register} errors={errors} />
					)}
					<Input
						id="email"
						label="Email"
						type="email"
						type="email"
						register={register}
						errors={errors}
					/>
					<Input
						id="password"
						label="password"
						type="password"
						register={register}
						errors={errors}
					/>
					<div>
						<Button>
							Button
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AuthForm;
