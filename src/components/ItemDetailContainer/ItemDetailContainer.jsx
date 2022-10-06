import {useState, useEffect } from "react"
import { getProduct } from "../Products/AsyncMock"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    
    useEffect(() => {
        getProduct(2).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    console.log(product)

    if (loading) {
        return <h1>Cargando...</h1>
    }

  return (
      <div>
          <h1>Detalle de Producto</h1>
          {/* <itemDetail {...product} /> */}
          <div>{ product.nombre }</div>
      </div>
  )
}

export default ItemDetailContainer