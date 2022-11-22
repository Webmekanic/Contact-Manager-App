import React, { useContext, Fragment } from "react"
import ContactContext from "../../context/contact/contactContext"
import ContactsItem from "./ContactsItem"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const Contacts = () => {
  const contactContext = useContext(ContactContext)

  const { contacts, filtered } = contactContext

  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>
  }

  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactsItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactsItem key={contact.id} contact={contact} />
          ))}
    </Fragment>
  )
}

export default Contacts
