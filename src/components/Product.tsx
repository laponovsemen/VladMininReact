import {IProduct} from "../../models";
import {useState} from "react";

interface ProductProps {
	product : IProduct
}

export function Product({product} : ProductProps) {
	console.log(product.image)
	const [details, setDetails] = useState(false)
	const btnBGClassName = details ? "bg-blue-400" : "bg-amber-400"
	const btnClasses = ["py-2 px-2 border", btnBGClassName]//
	return (
		<div className="border py-2 px-4 rounded flex flex-col  justify-center items-center mb-2">
			<img src={product.image} className="w-1/6" alt={product.title}/>
			<p>{product.title}</p>
			<span className="font-bold">{product.price}</span>
			<button
				className={btnClasses.join(" ")}
				onClick={() => setDetails(prev => !prev)}
			>
				{details ? "Hide details" : "Show details"}
			</button>
			{details &&
				<div>
					<p>{product.description}</p>
					<p>Rate: <span style={{fontWeight: 'bold'}}>{product.rating.rate}</span></p>
				</div>
			}
		</div>
	)
}
