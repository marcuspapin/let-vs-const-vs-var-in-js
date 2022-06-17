/* 
  START: let examples
*/

// Example 1: Block Scoped

{
  let name = 'Marcus'
  console.log(name)
}

// Example 2: Can be reassigned

{
  let name = 'Marcus'
  name = 'Roland'

  console.log(name)
}

/* 
  END: let examples
*/

/* 
  START: const examples
*/

// Example 1: Block Scoped

{
  const name = 'Marcus'
  console.log(name)
}

// Example 2: Reassigning const

{
  const name = 'Marcus'
  name = 'Roland'
  console.log(name)
}

// Modifying arrays using const

{
  const names = ['Marcus', 'Roland']
  names.push('Earl')

  console.log(names)
}

// Modifying objects using const

{
  const person = {
    name: 'Marcus',
    nationality: 'Canadian',
  }

  console.log(person)

  person.birthday = 'July 1, 1990'

  console.log(person)
}

/* 
  END: const examples
*/

/* 
  START: var examples
*/

// Example 1: Function Scoped

function getName() {
  var name = 'Marcus'
  console.log(name)
}

getName()

// Example 2: var can be reassigned

function getName() {
  var name = 'Marcus'
  // name = 'Roland'
}

getName()
console.log(name)

/* 
  END: var examples
*/
