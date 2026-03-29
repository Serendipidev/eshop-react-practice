import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
	return (
		<div className="product-card">
			<img className="product-card-image" src={product.image} />
			<div className="product-card-content">
				<h3 className="prodct-card-name">{product.name}</h3>
				<p className="prodct-card-price">${product.price}</p>
				<div className="product-card-actions">
					<Link className="btn btn-secondary">View details</Link>
					<button className="btn btn-primary">Add to cart</button>
				</div>
			</div>
		</div>
	);
}
