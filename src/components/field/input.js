import React, { memo } from 'react'
import style from './input.module.css'

export default memo(({ Prefix = null, disabled = false, Suffix = null, className = '', ...props }) => {
  return (
    <div className={`${style.inputBox} ${className}`}>
      {Prefix && <Prefix.type {...Prefix.props} />}
      <input type='text' {...props} className={style.input} />
      {Suffix && <Suffix.type {...Suffix.props} />}
    </div>
  )
})
