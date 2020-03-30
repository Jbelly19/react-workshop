import React, { useState, useReducer } from 'react'
import { MdShoppingCart } from 'react-icons/md'
import Heading from 'YesterTech/Heading'

const initialState = {
  sameAsBilling: false,
  billingName: '',
  billingAddress: '',
  shippingAddress: '',
  shippingName: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SAME_AS_BILLING':
      return {
        ...state,
        sameAsBilling: !state.sameAsBilling
      }
    case 'CHANGE_FIELD':
      return { ...state, [action.field]: action.value }
    default:
      return state
  }
}

function CheckoutBilling({ onSubmit }) {
  // const [sameAsBilling, setSameAsBilling] = useState(false)
  // const [billingName, setBillingName] = useState('')
  // const [billingAddress, setBillingAddress] = useState('')
  // const [shippingName, setShippingName] = useState('')
  // const [shippingAddress, setShippingAddress] = useState('')

  const [state, dispatch] = useReducer(reducer, initialState)

  const {
    sameAsBilling,
    billingName,
    billingAddress,
    shippingName,
    shippingAddress
  } = state

  const changeField = (field, value) => {
    dispatch({ type: 'CHANGE_FIELD', field, value })
  }

  function handleSubmit(event) {
    event.preventDefault()
    const fields = {
      billingName,
      billingAddress,
      shippingName: sameAsBilling ? billingName : shippingName,
      shippingAddress: sameAsBilling
        ? billingAddress
        : shippingAddress
    }
    onSubmit(sameAsBilling, fields)
  }

  return (
    <div className="spacing">
      <Heading>
        <MdShoppingCart /> Billing &amp; Shipping
      </Heading>
      <form onSubmit={handleSubmit} className="spacing">
        <Heading as="h2" size={3}>
          Billing Info
        </Heading>
        <hr />
        <div className="form-field">
          <label htmlFor="billing:name">Name</label>
          <input
            id="billing:name"
            type="text"
            required
            defaultValue={billingName}
            onChange={event =>
              changeField('billingName', event.target.value)
            }
          />
        </div>
        <div className="form-field">
          <label htmlFor="billing:address">Address</label>
          <input
            id="billing:address"
            type="text"
            required
            defaultValue={billingAddress}
            onChange={event =>
              changeField('billingAddress', event.target.value)
            }
          />
        </div>

        <Heading as="h2" size={3}>
          Shipping Info
        </Heading>

        <label>
          <input
            type="checkbox"
            defaultChecked={sameAsBilling}
            onChange={() =>
              dispatch({ type: 'TOGGLE_SAME_AS_BILLING' })
            }
          />{' '}
          Same as Billing
        </label>

        <div className="form-field">
          <label htmlFor="shipping:name">Name</label>
          <input
            id="shipping:name"
            type="text"
            required
            value={sameAsBilling ? billingName : shippingName}
            onChange={event =>
              changeField('shippingName', event.target.value)
            }
            disabled={sameAsBilling}
          />
        </div>
        <div className="form-field">
          <label htmlFor="shipping:address">Address</label>
          <input
            id="shipping:address"
            type="text"
            required
            value={sameAsBilling ? billingAddress : shippingAddress}
            onChange={event =>
              changeField('shippingAddress', event.target.value)
            }
            disabled={sameAsBilling}
          />
        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  )
}

export default CheckoutBilling
