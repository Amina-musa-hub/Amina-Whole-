// import { useEffect , useState } from 'react'
import React , {useContext} from 'react'
import { UserContext } from './PrayA'

function PrayD() {
    
    const user = useContext(UserContext)
    return(
        <>
         <div className='border'>
        <p>Lorem ipsum dolor sit amet. section D</p>
        <p>{`Bye ${user}`}</p>
        </div>
        </>
    )
}

export default PrayD