import { Checkbox } from '@mui/material'
import { DataGrid, type GridRenderCellParams } from '@mui/x-data-grid'
import React, { useState } from 'react'

import { People } from '@/data'
import { type Person } from '@/models'

const Home: React.FC<{}> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
  const pageSize = 5

  const findPerson = (person: Person): boolean => !(selectedPeople.find(p => p.id === person.id) == null)
  const filterPerson = (person: Person): Person[] => selectedPeople.filter(p => p.id !== person.id)
  const handleChange = (person: Person): void => {
    setSelectedPeople(findPerson(person) ? filterPerson(person) : [...selectedPeople, person])
  }

  const columns = [
    {
      field: 'actions',
      headerName: '',
      width: 50,
      renderCell: (params: GridRenderCellParams) => <>
        <Checkbox size="small" checked={findPerson(params.row)} onChange={() => { handleChange(params.row) }}/>
      </>
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'category',
      headerName: 'Categories',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'company',
      headerName: 'Company',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    },
    {
      field: 'levelOfHappiness',
      headerName: 'Level of happiness',
      flex: 1,
      renderCell: (params: GridRenderCellParams) => <>{params.value}</>
    }]

  return <>
    <DataGrid
        rows={People}
        columns={columns}
        disableColumnSelector
        disableSelectionOnClick
        autoHeight
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize]}
        getRowId={(row: any) => row.id}
    />
  </>
}

export default Home
