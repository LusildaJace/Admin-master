import Button from './button/Button'
import './widgetLg.scss'

const WidgetLg = () => {
  return (
    <div className='widgetLgComponent'>
      <h3 className="title">Latest Orders</h3>
      <table>
        <tr className='firstTr'>
          <th>Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
            <span>Lusilda Jace</span>
          </td>
          <td className='date'>22 Feb 2023</td>
          <td className='amount'>$152.00</td>
          <td className='status'><Button type='Approved' /></td>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
            <span>Lorna Qoku</span>
          </td>
          <td className='date'>2 Jan 2023</td>
          <td className='amount'>$12.00</td>
          <td className='status'><Button type='Declined' /></td>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
            <span>Sarah Ivanaj</span>
          </td>
          <td className='date'>2 May 2023</td>
          <td className='amount'>$18.00</td>
          <td className='status'><Button type='Pending' /></td>
        </tr>
        <tr className='secondTr'>
          <td className='user'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&usqp=CAU" alt="" />
            <span>Marjan Cangollari</span>
          </td>
          <td className='date'>12 April 2023</td>
          <td className='amount'>$110.00</td>
          <td className='status'><Button type='Approved' /></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg