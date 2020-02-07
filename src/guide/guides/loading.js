import React from 'react'
import { Loading } from 'ui/components/loading'
const LoadingGuide = () => {
  return (
    <div>
      <Loading />
    </div>
  )
}

export default [
  {
    name: 'LoadingGuide',
    description: 'Basic loading indicator',
    component: LoadingGuide,
  },
]
