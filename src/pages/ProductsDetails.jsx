import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios"

const endpoint = "https://fakestoreapi.com/products"

export default function ProductsDetails() {

    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios.get(endpoint + "/" + id)
            .then((response) => {
                setProduct(response.data)
            })
    }, [id])

    if (product === null) {
        return <p>Caricamento...</p>
    }

    return (
        <div className="container py-5 text-center">

            <h2 className="mb-4">{product.title}</h2>

            <img
                src={product.image}
                alt={product.title}
                style={{ width: "220px", height: "220px", objectFit: "contain" }}
                className="mb-4"
            />

            <p className="fw-bold">€ {product.price}</p>

            <p className="mb-4">{product.description}</p>

            <Link to="/products" className="btn btn-dark">
                Torna ai prodotti
            </Link>

        </div>
    )
}