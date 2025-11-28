// import { useEffect , useState } from 'react'
import PrayD from './PrayD'
import React , {useContext} from 'react'
import { UserContext } from './PrayA'
function PrayC() {
     
    const user = useContext(UserContext)
    return(
        <>
        <div className='border'>
        <h1>Lorem ipsum dolor sit amet. section C</h1>
        <p>{`Hello again${user}`}</p>
         <PrayD />
        </div>
        </>
    )
}

export default PrayC