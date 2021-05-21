import React from 'react'
import {ButtonComponent} from 'components/ButtonComponent'
import {ContactComponent} from 'components/ContactComponent'

export const App = ({}) => {
    return (
      <div>
      <ButtonComponent heading="Button Component" buttonText="Button" />
      <ContactComponent contactMessage="Contact us" subscribeMessage="Subscribe to Newsletter" />
      </div>
    )
}
