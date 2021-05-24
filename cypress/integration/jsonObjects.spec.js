/// <reference types="cypress"/>

describe('JSON objects', () =>{

    it('JSON objects', () => {
        cy.openHomePage()

        const simpleObject = {"Key": "value", "Key2": "value2",}

        const simpleArrayOfValues = ["one", "two", "three"] // has index and starts with zero

        const arrayOfObjects = [{"Key": "value"}, {"Key2": "value2"}, {"Key3": "value3"}]

        const typeOfData = {"string": "this is a string", "number": 10}

        const mix = {
            "FirstName": "Ana",
            "LastName": "Santos",
            "Age": 35,
            "Students": [
                {
                    "FirstName": "Marcus",
                    "LastName": "Menezes",
                }, 
                {
                    "FirstName": "Luis",
                    "LastName": "Manuel",
                }
            ]
        }


        //print result into the console
        console.log(simpleObject.Key2) //or console.log(simpleObject["Key2"])

        console.log(simpleArrayOfValues[1])  
        
        console.log(arrayOfObjects[2].Key3)

        console.log(mix.Students[0].FirstName)
        console.log(mix.Students[1].LastName)

        const lastNameOfSecondStudent = mix.Students[1].LastName
        
        
    })
})