import * as React from 'react'
import Header from '../components/header'

const NotFound = () => {

    return <>
        <Header /><div
            className='min-h-[100vh] flex flex-col justify-center items-center'
        >
            <div className='font-bold text-2xl'>Page Not Found</div>
        </div>

    </>
}

export default NotFound