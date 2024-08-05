import React from 'react'
import Person from '../Person/Person';
function Persons(props) {
 return props.persons.map(
    (p,index) => {
        return(
            
                <Person 
                key={p.id} 
                name={p.name} 
                age={p.age} 
                 click= {() => props.delete(index)}
                 change={(event) => props.change(event,p.id)}
                />
            
        )
    }
 )
}

export default Persons
