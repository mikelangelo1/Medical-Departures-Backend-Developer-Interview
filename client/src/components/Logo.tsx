import * as React from 'react';


import { Link } from 'react-router-dom'

interface Props {
    theme?: string
}

const Logo = ({ theme }: Props) => {

    let src = '/images/logo.png'

    if (theme == 'white') {
        src = '/images/logo.png'
    }

    return (<Link className="flex items-center  px-3 mt-3"
        to='/'
    >
        <img
            src={src}
            className="hidden md:inline mr-3 h-full  w-full "
            alt="Custom Logo"
        />
    </Link>)
}

export default Logo