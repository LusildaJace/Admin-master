import './featuredInfo.scss'

import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

const FeaturedInfo = () => {
  return (
    <div className='featuredInfoComponent'>
      <div className='item'>
        <span className='title'>Revanue</span>
        <div>
          <span className='money'>$500</span>
          <span className='moneyRate'>
             -11,4 <ArrowDownward className='icon negative'/>
          </span>
        </div>
        <span className='sub'>Compared to last month</span>
      </div>

      <div className='item'>
        <span className='title'>Sales</span>
        <div>
          <span className='money'>$700</span>
          <span className='moneyRate'>
             -1,4 <ArrowDownward className='icon negative' />
          </span>
        </div>
        <span className='sub'>Compared to last month</span>
      </div>

      <div className='item'>
        <span className='title'>Cost</span>
        <div>
          <span className='money'>$560</span>
          <span className='moneyRate'>
             +12,4 <ArrowUpward className='icon' />
          </span>
        </div>
        <span className='sub'>Compared to last month</span>
      </div>
    </div>
  )
}

export default FeaturedInfo