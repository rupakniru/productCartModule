import React from "react";
import Itemcart from "./Itemcart";
import ProductService from "./ProductService";
class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        ProductService.getProducts().then((response) => {
            this.setState({ users: response.data })
        });
    }
    render() {
        return (
            this.state.users.map((item, index) => {
                return (
                    <Itemcart

                        img={item.color}
                        price={item.price}
                        title={item.productName}
                        productId={item.productId}
                        dimensions={item.dimension}
                        desc={item.specification}
                        manufacturer={item.manufacturer}
                        quantity={item.quantity}
                        id={item.id}
                        item={item}
                        key={index}
                    />
                )
            })

        )
    }
}
export default Product;