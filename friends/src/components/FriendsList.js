import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../helpers/axiosWithAuth';
import AddFriend from './AddFriend'

export default function FriendsList()  {
  const [ friend, setFriend ] = useState([])
  

  const getFriends = () => {
    axiosWithAuth().get('/friends')
      .then(res => {
        console.log('gathering friend', res)
        setFriend(res.data)
        })
      .catch(err => {
        console.log('unable to locate friends', err)
        })
      }

    useEffect(() => {
      getFriends()
    }, [])


  return (
    <div className='friends-container'>
      <h1>Friends:</h1>
        <ul>
          {friend.map(person => {
            return ( 
              <li className='cards'key={person.id}>
                <p>{person.name}</p>
                <p>{person.age}</p>
                <p>{person.email}</p>
              </li>
            )
          })}
        </ul>  

        <AddFriend />
    </div>
  )
}