import React from 'react'
import {ButtonComponent} from 'components/ButtonComponent'
import {ContactComponent} from 'components/ContactComponent'

export const App = () => {
    return (
      <div>
        <ButtonComponent buttonText="Button" buttonWidth="400px" />
        <ContactComponent contactTitle="Contact us" subscribeTitle="Subscribe to News" contactMessage="Contact us" subscribeMessage="Subscribe to Newsletter" />
      </div>
    )
}
