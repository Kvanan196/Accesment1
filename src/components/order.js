import React from 'react';
import './OrderTables.css'; // Make sure to create an OrderTable.css file with the styles

const orders = [
  // Add your orders here
  { plus : "+", chechbox :"checbox", channel : "./",orderNo: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue: '0.00', status: 'Pending' },
  { plus : "+", chechbox :"checbox", channel : "./",orderNo: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue: '0.00', status: 'Pending' },
  { plus : "+", chechbox :"checbox", channel : "./",orderNo: '#TKN20203754', orderDate: '2022-05-04', city: 'Lucknow', customerName: 'Abhishek Dixit', orderValue: '0.00', status: 'Pending' }
  // ... more orders
];

const OrderTable = () => {
  return (
    <>
      <header className="header">
      
        <div className='head-logo'>
          <img src=''alt='logo' />
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div className='right-head'>
          <i class="fa-regular fa-moon"></i>
          <i class="fa-solid fa-bell"></i>
          <i class="fa-solid fa-language"></i>
          <img src="" alt=""/> 

        </div>
     

      
   
      </header>
      
    <div className='order-view'>
        <div className='sidebar'>
                <div className='side-list'>  <i class="fa-solid fa-gauge"></i> <p href='#'> Dashboard</p></div>
                <div className='side-list'>  <i class="fa-solid fa-gauge"></i> <p href='#'> Inventory</p></div>
                <div className='side-list'>  <i class="fa-solid fa-cart-shopping"></i> <p href='#'> Orders</p></div>
                <div className='side-list'>  <i class="fa-solid fa-truck-fast"></i> <p href='#'> Shipping</p></div>
                <div className='side-list'> <i class="fa-solid fa-share-nodes"></i> <p href='#'>Channel</p></div>
            
        </div>
        <div className="container">
            <div className='order-head'>
                <p> Orders</p>
            </div>

            <nav className='navigation '>

            <button className="tabpend">Pending</button>
            <button className="tab">Accepted</button>
            <button className="tab">AWB Created</button>
            <button className="tab">Ready to Ship</button>
            <button className="tab">Shiped</button>
            <button className="tab">Completed</button>
            <button className="tab">Cancelled</button>
            
            
            </nav>
            <div className='order-d'>
                <p> Import Orders</p>
                <p> Accept Orders</p>
                <p> Print</p>

            </div>

            
        <div className="orderTable">
            <table>
            <thead>
                <tr>
                <input type="checkbox"/>
                <th> Channel</th>
                <th>Order No</th>
                <th>Order Date</th>
                <th>City</th>
                <th>Customer Name</th>
                <th>Order Value</th>
                <th>Status</th>
                <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {orders.map((order, index) => (
                <tr key={index}>
                    <td> {order.plus}</td>
                    {order.chechbox=== "checkbox"} <td> <input type="checkbox"/></td>
                    <td>{order.orderNo}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.city}</td>
                    <td>{order.customerName}</td>
                    <td>{order.orderValue}</td>
                    <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
                    <td><button className="actionButton">Actions</button></td>
                </tr>
                ))}
            </tbody>
            </table>
            
        </div>
        <div className='bottom'>
            <button>&#60;  </button>
            <button> 1</button>
            <button>&#62; </button>
            <button> 20/pages</button>


        </div>
        </div>
    </div>
    </>
  );
};

export default OrderTable;
