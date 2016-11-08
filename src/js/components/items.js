import React from 'react'
import ClassificationItem from './classification-item'

export default function Items({ items }) {
  return (
      <ul className="list-group">
        {items.map(({ item, code, label}) =>
        <li className="list-group-item" key={item}>
          <ClassificationItem item={item} code={code} label={label}/>
        </li>
      )}
    </ul>
)
}
