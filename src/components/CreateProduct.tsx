import React, {ChangeEvent, useState} from "react";
import {IProduct} from "../../models";

const productData: IProduct = {
	"title": "",
	"price": 13.4,
	"description": "dkfsd;flk",
	"category": "ldsfmslkdfsldfl",
	"image": "https://cs8.pikabu.ru/images/big_size_comm/2018-04_1/152287788715888647.jpg",
	"rating": {"rate": 5, "count": 5}
}
export function CreateProduct() {
	const [value, setValue] = useState('')
	const submitHandler = (event : React.FormEvent) => {
		event.preventDefault()

	}

	const changeHandler = (event : ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}

	return (
		<form onSubmit={submitHandler}>
			<input
				type={"text"}
				className="border px-2 py-2 mb-10 w-full outline-5 outline-violet-400"
				placeholder="Enter product title..."
				value={value}
				onChange={changeHandler}
			/>
			<button
				className="py-2 px-2 border bg-violet-400 hover:text-red-600"
				type="submit"
			>
				Create
			</button>
		</form>
	)
}
