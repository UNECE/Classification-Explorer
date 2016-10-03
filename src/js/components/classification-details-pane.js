import React from 'react'

export default function ClassificationDetailsPane({ code, label, issued }) {
  return (
    <div>
      <h1>Classification details</h1>
      <div>code: {code}</div>
      <div>label: {label}</div>
      <div>issued: {issued}</div>
    </div>
  )
}