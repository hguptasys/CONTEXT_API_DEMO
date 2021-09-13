import React, { useEffect, useState, useContext } from 'react'
import userData from '../service/Service'
import { GlobalContext } from '../context/Provider'
import { Link } from 'react-router-dom'

const Page_1 = (props) => {
  const [data, setData] = useState([])

  console.log('Page_1_data', data)

  const { data_1Dispatch: dispatch, data_1State } = useContext(GlobalContext)

  useEffect(async () => {
    const user_Data = await userData.getAllProducts()
    console.log('user_Data', user_Data)
    dispatch({
      type: 'LOAD_DATA',
      payload: user_Data,
    })
    setData(data_1State.data_1)
  }, [])
  return (
    <>
      {data_1State.data_1 &&
        data_1State.data_1.map((data) => (
          <>
            <ul>
              <li>{data.name}</li>
            </ul>
            <Link to={`/Page_3/${data.id}`}>Edit</Link>
            <button
              onClick={() =>
                dispatch({
                  type: 'REMOVE_DATA',
                  payload: data.id,
                })
              }
            >
              Delete
            </button>
          </>
        ))}
    </>
  )
}

export default Page_1
