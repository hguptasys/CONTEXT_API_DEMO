import React, { useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../context/Provider'

const Page_3 = (props) => {
  const [data, setData] = useState({})
  const [selectedUserData, setSelectedUser] = useState('')

  const { data_1Dispatch: dispatch, data_1State } = useContext(GlobalContext)
  const currentUserId = props.match.params.id

  var EditData = () => {
    dispatch({
      type: 'EDIT_DATA',
      payload: { ...data, name: selectedUserData },
    })
  }

  useEffect(() => {
    const userId = currentUserId
    const selectedUser = data_1State.data_1.find((user) => user.id == userId)
    setData(selectedUser)
    setSelectedUser(selectedUser.name)
  }, [])

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Data Page_3"
        value={selectedUserData}
        onChange={(e) => setSelectedUser(e.target.value)}
      />
      <button type="submit" onClick={() => EditData()}>
        Edit
      </button>
    </div>
  )
}

export default Page_3
