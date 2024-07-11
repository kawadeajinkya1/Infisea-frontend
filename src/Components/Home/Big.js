import React from 'react'
import classes from './Big.module.css'
import W from "./../../Asset/W.mp4"

const Big = () => {
  return (
    <div>

      <div className={classes.simulation}>
            
            <video autoPlay muted loop className={classes.video}>
                <source src={W} type="video/mp4" />
    
        </video>

             <div className='tt'>

                <div className={classes.text}>

<span className={classes.bh1}>INFISEA</span>

</div>
             </div>
        </div>

    </div>
  )
}

export default Big