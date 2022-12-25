import Spline from '@splinetool/react-spline';
import {useState, useEffect} from 'react'
import ClipLoader from "react-spinners/ClipLoader"

export default function Model() {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
            }, 3000)

    }, [])

    return (
        <div className='spline'>
            {
                loading ? <ClipLoader color={'black'} loading={loading} size={150} />
                    : <Spline scene="https://prod.spline.design/xStq8NcwCkcvOFg7/scene.splinecode"/>
            }
        </div>
    )
   
}

