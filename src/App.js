import React from 'react'
import {ButtonComponent} from 'components/ButtonComponent'
import {ContactComponent} from 'components/ContactComponent'
import { AboutComponent } from 'components/AboutComponent/AboutComponent'
import { AnnouncementComponent } from 'components/AnnouncementComponent/AnnouncemenComponent'

export const App = () => {
    return (
      <div>
        <ButtonComponent buttonText="Button" buttonWidth="400px" />
        <ContactComponent contactTitle="Contact us" subscribeTitle="Subscribe to News" contactMessage="Contact us" subscribeMessage="Subscribe to Newsletter" />
        <AboutComponent header="About Component" mainText="Welcome to SCoRe Lab" subText="This is a description text" buttonText="Explore" buttonLink="/" image="https://scorelab.org/images/community.png" />
        <AnnouncementComponent header="Announcements" speed="2" title="Announcements" direction="up" data={[{text: "Notice 1", link: "/"}, {text: "Notice 2", link: "/"}]} />
      </div>
    )
}
