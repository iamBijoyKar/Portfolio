import React, { useState } from 'react'
import Alert from '@mui/material/Alert'
import { useSelector } from 'react-redux'
import { IoIosCloseCircleOutline } from 'react-icons/io'

export default function Warning() {
  const isHireMeSubmitted = useSelector(
    (state) => state.contactForm.isHireMeSubmitted,
  )
  const isSayHiSubmitted = useSelector(
    (state) => state.contactForm.isSayHiSubmitted,
  )

  const [show, setShow] = useState(true)

  return (
    <div>
      {(isHireMeSubmitted || isSayHiSubmitted) && show ? (
        <Alert severity="warning">
          <span className="flex items-center gap-2 ">
            <strong>Warning!</strong> This form can be filled only once for each
            session. Close the tab and open a new one to fill the form again.
            <button onClick={() => setShow(false)} className="cursor-pointer ">
              <IoIosCloseCircleOutline className="text-2xl cursor-pointer" />
            </button>
          </span>
        </Alert>
      ) : (
        ''
      )}
    </div>
  )
}
