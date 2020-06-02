import React from 'react';
import data from '../data/products.json';
import ProductsBody from '../ProductsBody/ProductsBody'
import '../../Components/data/data.css'

class Filter extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                type:'default',
                price:'default'
            }
        }
     //Event Handler Targetting the Value of the Price and Type
        handlePriceDropDownSelect = (event) => {
            this.setState({
                price: event.target.value,
                type: event.target.value

            })
        }


     // Const  Type and Price is equal to 

    render() {
        const { type, price } = this.state;
        return(
            <div>
            <div className="product-header">
            <h1 className="headline">Summer Catalog </h1>
            </div>
                <section className="button-container">
                    <p>Fliter by Type</p>
                    <select value={type} onChange={this.handlePriceDropDownSelect}>
                        <option value="default">Show All</option>
                        <option value="shirts">T-Shirts</option>
                        <option value="accessories">Accessories</option>
                    </select>
                    <p>Filter by Price</p>
                    <select value={price} onChange={this.handlePriceDropDownSelect}>
                        <option value="default">Show All</option>
                        <option value="price0to50">$0 - $50</option>
                        <option value="price50to100">$50 - $100</option>
                       
                </select>

            </section>
            <div className="container">
         {data.map((item) => {
          if (type === 'default' &&  price === 'default') {
            return <ProductsBody item={item}/>
          } else if (type === item.type && price === item.price) {
            return <ProductsBody item={item} />
          } else if (type === item.type || price === item.price) {
            return <ProductsBody item={item} />
          } else if (type === 'default' ||  price === 'default') {
            return <ProductsBody item={item} />
          }
         })}


            </div>
            </div>
        )
    }
}


export default Filter;