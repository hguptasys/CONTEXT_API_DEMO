import React, { useEffect, useState, useContext } from 'react'
// import { ContextData } from '../context/Context'
// import { Link} from 'react-router-dom'

const Page_2 = (props) => {
  // const [data, setData] = useState('')
  // const [AallData, setAallData] = useState({})
  // var context = useContext(ContextData)

  // const PostData = () => {
  //   context.UpdateContext({ ...context.data_collection, data_2: data })
  //   props.history.push('/')
  // }
  // console.log('Page_2_ALL_DATA   ===>', AallData)

  // useEffect(() => {
  //   console.log('Page_2 UpdateContext   ===>', context.data_collection)
  //   setAallData(context.data_collection)
  // }, [])

  return (
    <div>
      {/* <input
        type="text"
        placeholder="Enter Data Page_2"
        onChange={(e) => setData(e.target.value)}
      />
      <button type="submit" onClick={() => PostData()}>
        Submit
      </button>

      {/* SHOW ALL DATA */}
      {/* {AallData.data &&
        AallData.data.map((data) => (
          <ul>
            <li>{data.name}</li>
          </ul>
        ))} */}

        {/* DATA FROM PAGE_2 */}
     
      
    </div>
  )
}

export default Page_2
