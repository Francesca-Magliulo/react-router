import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

const endpoint = "https://fakestoreapi.com/products"


export default function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(endpoint)
            .then((response) => {
                console.log(response.data)
                setProducts(response.data)
            })
    }, [])

    return (
        <div className="container py-4">

            <h1 className="mb-4 text-center">
                I nostri prodotti
            </h1>

            <div className="row g-4">

                {products.map((product) => (
                    <div key={product.id} className="col-md-4">
                        <Link to={`/products/${product.id}`} className="text-decoration-none text-dark">
                            <div className="card h-100 shadow-sm">

                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="card-img-top p-3"
                                    style={{ height: "220px", objectFit: "contain" }}
                                />

                                <div className="card-body">

                                    <h6 className="card-title">
                                        {product.title}
                                    </h6>

                                    <p className="fw-bold">
                                        € {product.price}
                                    </p>

                                </div>

                            </div>
                        </Link>
                    </div>
                ))}

            </div>

        </div>
    )

}
