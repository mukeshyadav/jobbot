import React from 'react'
import JobBotContext from '../../store.js'

const Loader = () => {
  return (
    <JobBotContext.Consumer>
      {ctx => ctx.isLoader ? <div className='loader'>
                               <div className='lds-ellipsis'>
                                 <div></div>
                                 <div></div>
                                 <div></div>
                                 <div></div>
                               </div>
                             </div> : null}
    </JobBotContext.Consumer>
  )
}

export default Loader
