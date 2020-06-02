import React  from 'react';
import Filter from './Components/Filter/filter'
import Nav from './Components/Navbar/Navbar/Nav'
import Footer from './Components/Navbar/Footer/Footer'
import './App.css'
import './styles/data.css'
import './styles/Footer.css'
import './styles/nav.css'






class ProductList extends React.Component {
  render(){
    return(

    <div className="body">
      <Nav />
      <Filter />
      <Footer />
    </div>

    );

    
    }
  
}

export default ProductList;