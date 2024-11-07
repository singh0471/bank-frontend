import React from 'react'
import Table from '../SharedComponents/table'
import { getAllusers } from '../Service/user'

const HomePage = () => {
  return (
    <div>
        <Table user = {getAllusers}></Table>
    </div>
  )
}

export default HomePage