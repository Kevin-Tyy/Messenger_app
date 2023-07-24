"use client";

import { useState, useCallback } from "react";
import { useForm , FieldValues , SubmitHandler } from "react-hook-form";
type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
	const [variant, setVariant] = useState<Variant>("LOGIN");
	const [loading, setLoading] = useState<boolean>(false);
	const toggleVariant = useCallback(() => {
		setVariant(variant === "LOGIN" ? "REGISTER" : "LOGIN");
	}, [variant]);

  const { register , handleSubmit, formState : { errors , } } = useForm<FieldValues>({
    defaultValues : {
      name : "",
      email  : "",
      password : "",
    }
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    if(variant === 'LOGIN'){
      // next auth sign in
    }
    if(variant === 'REGISTER'){
      // register a new user
    }
  }
  const socialAction = (action : string) => {
    setLoading(true);
    //side in with next auth providers
  
  }
	return <div>AuthForm</div>;
};

export default AuthForm;
