import React from 'react'
import Item from './Item'

export default function List({catsWithMaleOwners, catsWithFemaleOwners}) {
    const maleOwnersCats = catsWithMaleOwners.map(cat => {
        return <Item key={cat} name={cat} />
    })
    const femaleOwnersCats = catsWithFemaleOwners.map(cat => {
        return <Item key={cat} name={cat} />
    })
    return(
    <div>
        <h3>Male</h3>
            <ul>
                {maleOwnersCats}
            </ul>
        <h3>Female</h3>
            <ul>
                {femaleOwnersCats}
            </ul>
    </div>
  )
}
