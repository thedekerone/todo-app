import React, { useState, useEffect } from 'react'
import { getTasks } from '../firebase'

export const useGetTasks = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        getTasks().then((res) => {
            setData(res)
        })
    }, [])
    if (data.length === 0) {
        return { data: data, loading: true }
    }
    else {
        return { data: data, loading: false }
    }
}
