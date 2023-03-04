import Dialog from '@mui/material/Dialog'
import React, { useEffect, useState } from 'react'
import { Subscription } from 'rxjs'

import { SubjectManager } from '@/models'

interface Props {
  children: React.ReactNode
}

export const dialogOpenSubject$ = new SubjectManager<boolean>()
export const dialogCloseSubject$ = new SubjectManager<boolean>()

export const CustomDialog: React.FC<Props> = ({ children }: Props) => {
  const [open, setOpen] = useState(false)
  let openSubject$ = new Subscription()
  let closeSubject$ = new Subscription()

  useEffect(() => {
    openSubject$ = dialogOpenSubject$.getSubject.subscribe(() => {
      handleClickOpen()
    })
    closeSubject$ = dialogCloseSubject$.getSubject.subscribe(() => {
      handleClose()
    })
    return () => {
      openSubject$.unsubscribe()
      closeSubject$.unsubscribe()
    }
  }, [])

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (): void => {
    setOpen(false)
  }

  const handleExit = (): void => {
    dialogCloseSubject$.setSubject = false
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => {
          handleExit()
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <div className="container-dialog">{children}</div>
      </Dialog>
    </div>
  )
}

export default CustomDialog
