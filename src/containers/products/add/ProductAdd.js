import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductAPI } from '../state/product.effects';

class ProductAdd extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      price: '',
      status: 0
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
    this.props.addProduct(this.state);
    // setTimeout(() => {
    //   this.props.history.push('/products')
    // }, 1000)
    // this.props.history.push('/products')
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
  addProductSuccess: state.productReducers.addProductSuccess
})

const mapDispatchToProps = dispatch => ({
  addProduct: product => {
    dispatch(addProductAPI(product))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd)