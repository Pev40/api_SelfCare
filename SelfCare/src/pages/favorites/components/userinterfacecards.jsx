import React, { useState } from 'react'
import { Card } from 'antd'

function InterfaceCards(props) {
  const { titlecard = '', linkrecipe = '', img = '' } = props
  const { Meta } = Card
  return (
    <div className="mb-10">
      <Card hoverable style={{ width: '100%' }} cover={<img src={img} />}>
        <Meta
          title={titlecard}
          description={
            <a
              href={linkrecipe}
              className="text-black font-bold hover:text-primary hover:font-bold"
            >
              Ir a la Receta
            </a>
          }
        />
      </Card>
    </div>
  )
}
export { InterfaceCards }
