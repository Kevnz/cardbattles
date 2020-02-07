import React from 'react'
import classnames from 'classnames'
import {
  MediaObject,
  MediaLeft,
  Content,
  Image,
  MediaContent,
} from '@brightleaf/elements'

import './card.scss'
export const Card = ({ className }) => {
  const classes = classnames('playing-card', className)
  console.info('CARD', classes)
  return (
    <MediaObject>
      <MediaLeft title="Component" hasIcon>
        <Image is64 src="/symbols/sword.png" />
      </MediaLeft>
      <MediaContent>
        <Content className="content">
          <div className={classes}></div>
        </Content>
      </MediaContent>
    </MediaObject>
  )
}

export default Card
