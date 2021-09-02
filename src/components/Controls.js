import React from "react"
import { useDispatch, useSelector } from "react-redux"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import { IS_ATTACH } from "../redux/StoreConstants"

export default function Controls() {
  const dispatch = useDispatch()
  const isAttach = useSelector((state) => state.app.isAttach)

  const handleChange = (event) => {
    dispatch({ type: IS_ATTACH, data: event.target.checked })
  }
  return (
    <div className="controls">
      <FormControlLabel
        control={<Switch checked={isAttach} onChange={handleChange} />}
        label="Attach a head model"
      />
    </div>
  )
}
