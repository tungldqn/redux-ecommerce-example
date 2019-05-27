import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editProductAPI } from '../state/product.effects';

class ProductEdit extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.product.name,
      price: this.props.product.price,
      status: this.props.product.status
    }
  }
  handleChange = event => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    if(name === 'status'){
      value = target.value === '1' ? 1 : 0
    }
    this.setState({
      [name]: value
    })
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const productId = this.props.match.params.id;
    this.props.editProduct(this.state, productId);
    setTimeout(() => {
      this.props.history.push('/products')
    }, 1000)
  }
  render() {
    let { name, price, status } = this.state;
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Name</label>
            <input type='text' name='name' className='form-control' value={name} onChange={this.handleChange} placeholder='Enter name' />
          </div>
          <div className='form-group'>
            <label>Price</label>
            <input type='number' name='price' value={price} onChange={this.handleChange} placeholder='price' />
          </div>
          <div className='form-group'>
            <label>Status</label>
            <select name='status' value={status} onChange={this.handleChange}>
              <option value={1}>Available</option>
              <option value={0}>Not available</option>
            </select>
          </div>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.productReducers.product
})

const mapDispatchToProps = dispatch => ({
  editProduct: (product, productId) => {
    dispatch(editProductAPI(product, productId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit)