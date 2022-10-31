import React from 'react'
import { Link } from 'react-router-dom'
import './AllPool.css'
import DetailPage from './DetailPage'



function All_pool() {
  return (
    <>
      <div className='container'>
        <div className='col-md-12'>
          <div className='text-white  text-style mb-3'>
            All Pool
          </div>
          <div className="table-responsive">
          <table className=" col-md-12 table table-dark table-striped  table-hover border format">
  <thead>
    <tr className='row-format'>
      <Link to="/DetailPage" element={DetailPage}><th scope="col">Id</th></Link>
      <th scope="col" colspan="2">Address</th>
      <th scope="col">Reverse 0</th>
      <th scope="col">Reverse 1</th>
      <th scope="col">Token 1</th>
      <th scope="col">Token 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td colspan="2">Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td colspan="2">Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td>@fat</td><td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
</div>

        </div>
      </div>
    </>
  )
}

export default All_pool