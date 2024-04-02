'use client'
import { useState } from 'react'
import { ref, child, get, set, update, remove } from 'firebase/database'

import FirebaseConfig from '../FirebaseConfig/FirebaseConfig'

const database = FirebaseConfig()

const FirebaseCrud = () => {

    const [ username, setUsername  ] = useState('')
    const [ fullname, setFullname ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ dob, setDob ] = useState('')

    const isBlank = value => 
        (value === null || value.toString().replaceAll(' ', '').length < 1)

    const InsertData = () => {
        if (isBlank(username) || isBlank(fullname) || isBlank(phone) || isBlank(dob)) {
            alert('Fill all the fields')
            return
        }

        const dbref = ref(database)

        get(child(dbref, 'Customer/' + username))
        .then(snapshot => {
            if (snapshot.exists()) {
                alert('The user already exists, try a different name')

            } else {
                set(ref(database, 'Customer/' + username), {
                    fullname: fullname,
                    phonenumber: phone,
                    dateofbirth: dob,
                })
                .then(() => alert('Customer added successfully'))
                .catch(error => {
                    console.log(error)
                    alert('There was an error adding the customer')
                })
            }
        })
        .catch((error) => {
            console.log(error)
            alert('Error data retrieval was unsuccessful')
        })
    }

    const UpdateData = () => {
        if (isBlank(username)) {
            alert('Username is empty, try to select a user first, with the select button')
            return
        }

        const dbref = ref(database)

        get(child(dbref, 'Customer/' + username))
        .then(snapshot => {
            if (snapshot.exists()) {
                update(ref(database, 'Customer/' + username), {
                    fullname: fullname,
                    phonenumber: phone,
                    dateofbirth: dob,
                })
                .then(() => alert('Customer updated successfully'))
                .catch(error => {
                    console.log(error)
                    alert('There was an error updating the customer')
                })

            } else {
                alert("The user doesn't exist")
            }
        })
        .catch((error) => {
            console.log(error)
            alert('Error data retrieval was unsuccessful')
        })
    }

    const DeleteData = () => {
        if (isBlank(username)) {
            alert('Username is required to delete a user')
            return
        }

        const dbref = ref(database)

        get(child(dbref, 'Customer/' + username))
        .then(snapshot => {
            if (snapshot.exists()) {
                remove(ref(database, 'Customer/' + username))
                .then(() => alert('Customer deleted successfully'))
                .catch(error => {
                    console.log(error)
                    alert('There was an error deleting the customer')
                })
            } else {
                alert("The user doesn't exist")
            }
        })
        .catch(error => {
            console.log(error)
            alert('Error data retrieval was unsuccessful')
        })
    }

    const SelectData = () => {
        if (isBlank(username)) {
            alert('User name is required to retrieve the data')
            return
        }

        const dbref = ref(database)

        get(child(dbref, 'Customer/' + username))
        .then(snapshot => {
            if (snapshot.exists()) {
                setFullname(snapshot.val().fullname)
                setPhone(snapshot.val().phonenumber)
                setDob(snapshot.val().dateofbirth)
            } else {
                alert('No data available')
            }
        })
        .catch((error) => {
            console.log(error)
            alert('Error data retrieval was unsuccessful')
        })
    }

    return (
        <>
            <label>Username</label>
            <input 
                type="text"
                value={ username }
                onChange={ e => setUsername(e.target.value) } />
                <br />

            <label>Full Name</label>
            <input 
                type="text"
                value={ fullname }
                onChange={ e => setFullname(e.target.value) } />
                <br />

            <label>Phone number</label>
            <input 
                type="text"
                value={ phone }
                onChange={ e => setPhone(e.target.value) } />
                <br />

            <label>Date of Birth</label>
            <input 
                type="date"
                value={ dob }
                onChange={ e => setDob(e.target.value) } />
            <br />

            <button onClick={ InsertData }>Insert Data</button>
            <button onClick={ UpdateData }>Update Data</button>
            <button onClick={ DeleteData }>Delete Data</button>
            <button onClick={ SelectData }>Select Data</button>
        </>
    )

}

export default FirebaseCrud