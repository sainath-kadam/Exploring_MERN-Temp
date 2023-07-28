import React from 'react'
import States from '../../ReactTerms/States/States'
import ParentComponent from '../../ReactTerms/Props/ParentComponent'
import ParentComponentProps from '../../ReactTerms/PropMapData/ParentComponentMap'
import AddForm from '../../ReactTerms/CreateandPost/AddForm'

export default function About() {
  return (
    <div>
        <h3>props</h3>
        <ParentComponent/>
        <h3>
          States
        </h3>
        <States/>
        <h3> data+map+props</h3>
        <ParentComponentProps/>
        <h3> posting and saving in the data base</h3>
        <AddForm/>
      
    </div>
  )
}

//props kakhel hai :  
// <ChildComponent/>  kaise data  parents se  child  me  bheja ja raha hai .