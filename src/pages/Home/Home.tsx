import { Checkbox } from '@mui/material'
import { DataGrid, type GridRenderCellParams } from '@mui/x-data-grid'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { People } from '@/data'
import { type Person } from '@/models'
import { addFavorite } from '@/redux/states'

const Home: React.FC<{}> = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
  const pageSize = 5
  const dispatch = useDispatch()

  const findPerson = (person: Person): boolean => !(selectedPeople.find(p => p.id === person.id) == null)
  const filterPerson = (person: Person): Person[] => selectedPeople.filter(p => p.id !== person.id)
  const handleChange = (person: Person): void => {
    const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person]
    dispatch(addFavorite(filteredPeople))
    setSelectedPeople(filteredPeople)
  }

  const columns = [
    {
      field: 'actions',
      type: 'actions',
      sortable: false,
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
