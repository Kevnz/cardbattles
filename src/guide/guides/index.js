import React from 'react'
import {
  Container,
  Menu,
  MenuLabel,
  MenuList,
  MenuListItem,
} from '@brightleaf/elements'

import CardGuides from './card'
/*

<Menu>
  <MenuLabel>General</MenuLabel>
  <MenuList className="menu-list">
    <MenuListItem>
      <a>Dashboard</a>
    </MenuListItem>
    <MenuListItem>
      <a>Customers</a>
    </MenuListItem>
  </MenuList>
  <MenuLabel>Administration</MenuLabel>
  <MenuList>
    <MenuListItem>
      <a>Team Settings</a>
    </MenuListItem>
    <MenuListItem>
      <a className="is-active">Manage Your Team</a>
      <ul>
        <li>
          <a>Members</a>
        </li>
        <li>
          <a>Plugins</a>
        </li>
        <li>
          <a>Add a member</a>
        </li>
      </ul>
    </MenuListItem>
  </MenuList>
</Menu>

*/

export const GuidesListing = () => {
  const guides = CardGuides.map((g, i) => {
    const Component = g.component
    return (
      <div key={`comp-${i}`}>
        <Component></Component>
      </div>
    )
  })
  return (
    <Container>
      <div>{guides}</div>
    </Container>
  )
}

export default GuidesListing
