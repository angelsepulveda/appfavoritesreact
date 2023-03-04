import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { People } from '@/data'
import { PeopleTable } from '@/pages/Home/components'
import { addPeople } from '@/redux/states'

const Home: React.FC<{}> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addPeople(People))
  }, [])

  return <PeopleTable/>
}

export default Home
