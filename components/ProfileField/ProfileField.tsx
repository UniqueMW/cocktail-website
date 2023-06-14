import { auth } from 'firebase.config'
import { updateEmail, updateProfile } from 'firebase/auth'
import React from 'react'
import { CiEdit } from 'react-icons/ci'

interface IProfileFieldProps {
  fieldName: 'Name' | 'Email'
  fieldValue: string
}

function ProfileField(props: IProfileFieldProps): JSX.Element {
  const [isEdit, setIsEdit] = React.useState(false)
  const [value, setValue] = React.useState(props.fieldValue)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleFieldEdit = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault()
    const newFieldValue = inputRef.current?.value as string
    const user = auth.currentUser
    if (
      newFieldValue !== props.fieldValue &&
      newFieldValue?.length > 0 &&
      isEdit &&
      user !== null
    ) {
      if (props.fieldName === 'Name') {
        updateProfile(user, { displayName: newFieldValue })
          .then(() => {
            setValue(newFieldValue)
            console.log('User Name Updated....', typeof newFieldValue)
          })
          .catch((error) => {
            console.log(error)
          })
      } else if (props.fieldName === 'Email') {
        updateEmail(user, newFieldValue)
          .then(() => {
            setValue(newFieldValue)
            console.log('Updated User Email......')
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
    setIsEdit(!isEdit)
  }

  return (
    <form className="flex flex-row space-x-6">
      <section>
        <h1 className="text-heading text-lg font-heading tracking-wider">
          {props.fieldName}:
        </h1>
        {isEdit ? (
          <input
            placeholder={value}
            className=" border-red-300 border-b-2 bg-transparent outline-none"
            ref={inputRef}
            type={props.fieldName === 'Email' ? 'email' : 'text'}
          />
        ) : (
          <h2 className="text-paragrah font-paragraph tracking-wide">
            {value}
          </h2>
        )}
      </section>
      <button className="h-fit text-lg" onClick={handleFieldEdit}>
        <CiEdit />
      </button>
    </form>
  )
}

export default ProfileField
