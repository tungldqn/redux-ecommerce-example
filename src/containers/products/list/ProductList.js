import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadProductsApi, deleteProductApi, loadProductApi } from '../state/product.effects';

class ProductList extends Component {
  componentDidMount(){
    this.props.getProductList()
  }
  handleDeleteProduct = product => {
    const cf = window.confirm('Are you sure you will delete this product ?');
    if(cf){
      this.props.deleteProduct(product)
    }
  }
  render(){
    const productList = this.props.products.map((product, index) => (
      <tr key={index}>
        <th scope='row'>{product.id}</th>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`badge badge-${product.status ? 'success' : 'danger'}`}>{product.status ? 'Available' : 'Not Available'}</span>
        </td>
        <td>
          <Link className='btn btn-sm btn-primary mr-2' to={`/products/edit/${product.id}`} onClick={() => this.props.loadProduct(product)}>
            <i className="fas fa-edit"></i>
          </Link>
          <button className='btn btn-sm btn-danger' onClick={ () => this.handleDeleteProduct(product) }>
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    ))
    return (
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>STT</th>
              <th scope='col'>Name</th>
              <th scope='col'>Price</th>
              <th scope='col'>Status</th>
              <th scope='col'>Activity</th>
            </tr>
          </thead>
          <tbody>
            {productList}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.productReducers.products
})

const mapDispatchToProps = dispatch => ({
  getProductList: () => {
    dispatch(loadProductsApi())
  },
  deleteProduct: product => {
    dispatch(deleteProductApi(product));
  },
  loadProduct: product => {
    dispatch(loadProductApi(product));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)