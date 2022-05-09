import { useState, useEffect } from 'react'
import './App.css';
import List from './Components/List';

function App() {
  const dataURL = 'http://agl-developer-test.azurewebsites.net/people.json'
  const [loading, setLoading] = useState(true)
  const [peopleData, setPeopleData] = useState([])
  const [catsWithMaleOwners, setCatsWithMaleOwners] = useState([])
  const [catsWithFemaleOwners, setCatsWithFemaleOwners] = useState([])
  
  function testData(){
    const data = catsWithFemaleOwners
  }

  // Function which retrieves the JSON data and saves it
  useEffect(() => {
    fetch(dataURL)
      .then(response => response.json())
      .then(data => setPeopleData(data))
      .then(() => setLoading(false))
  },[])
    
  useEffect(() => {
    
    if(loading === false){
      // Function which sorts the data and create two arrays, one for cats with male owners, the other for cats with female owners
      peopleData.forEach(person => {
        if(person.gender === "Male" && person.pets){
          person.pets.forEach(pet => {
            if(pet.type === "Cat") setCatsWithMaleOwners(prevState => [...prevState, pet.name])
          })
        } else if(person.gender === "Female" && person.pets){
          person.pets.forEach(pet => {
            if(pet.type === "Cat") setCatsWithFemaleOwners(prevState => [...prevState, pet.name])
          })
        }
      })
    }
    // Functions which sort the array out into alphabetical order
    setCatsWithFemaleOwners(prevState => prevState.sort((a, b) => a.localeCompare(b)))
    setCatsWithMaleOwners(prevState => prevState.sort((a, b) => a.localeCompare(b)))

  },[loading])

  return (
    <div className="App">
        <List catsWithMaleOwners={catsWithMaleOwners} catsWithFemaleOwners={catsWithFemaleOwners} />
    </div>
  );
}

export default App;