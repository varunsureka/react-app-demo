//function Based Component  
import React from 'react';
import styles from './Person.module.css';
const Person = (props) => {
    //console.log(props);
    return (
        <div className={styles.Person}>
            <p onClick={props.click}>I am a {props.name} and i have the age of {props.age}</p>
            <input type='text' value={props.name} onChange={props.change}/>
        </div>
    )
}



export default Person;