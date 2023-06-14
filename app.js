/**
 * Author:      Alejandro Gómez Ramírez
 * Date:        14/06/2023
 * Description: Vanilla Javascript for Persons data creation, filtering and sorting
 */

// GLOBALS
const persons = [];

/**
 * Class Person definition
 */
class Person {

    /**
     * Parametric class constructor.
     */
    constructor(name, favouriteFood, favouriteMovie, status) {
        this['Name'] = name;
        this['Favorite Food'] = favouriteFood;
        this['Favorite Movie'] = favouriteMovie;
        this['Status'] = status;
    }

    /**
     * Add run date to instance.
     */
    setRunDate() {
        this['Date'] = new Date().toISOString();
    }

    /**
     * @returns {string} Name, Date & Favorite Movie info. 
     */
    getMinLogData() {
        return `Name: ${this['Name']}, Date: ${this['Date']}, Favorite Movie: ${this['Favorite Movie']}`;
    }

    /**
     * @returns {string} Full person info.
     */
    getFullLogData() {
        return `Name: ${this['Name']}, Favorite Food: ${this['Favorite Food']}, Favorite Movie: ${this['Favorite Movie']}, Date: ${this['Date']}, Status: ${this['Status']}`;
    }
}

/**
 * Data initialization.
 */
const initPersonsData = () => {
    // Add default persons.
    persons.push(new Person('Rocky', 'Sushi', 'Back to The Future', 'Inactive'));
    persons.push(new Person('Miroslav', 'Sushi', 'American Psycho', 'Active'));
    persons.push(new Person('Donny', 'Singapore chow mei fun', 'The Princess Bride', 'Inactive'));
    persons.push(new Person('Matt', 'Brisket Tacos', 'The Princess Bride', 'Active'));

    // Add custom Person.
    persons.push(new Person('Alex', 'Tacos', 'Cinema Paradiso', 'Active'));
}

/**
 * Add script run date to persons array.
 */
const addPersonRunDate = () => {
    persons.forEach(person => {
        person.setRunDate();
    });
}

/**
 * Console.log Name, Date & Favorite Movie of active persons.
 */
const logActivePersons = () => {
    const filteredPersons = persons.filter(person => person['Status'] == 'Active');
    
    if(filteredPersons.length > 0) {
        filteredPersons.forEach(person => console.log(person.getMinLogData()));
    } else {    // Log if no Active persons found
        console.log("No 'Active' persons found!");
    }
}

/**
 * Sorts persons array by property name ASC.
 * @param {string} property use 'Name' | 'Favorite Food' | 'Favorite Movie' | 'Date' | 'Status'
 * @returns {Array} sorted array by property
 */
const sortPersonBy = (property) => {
    const sortedPersons = [...persons]; // Clone to avoid source array changes
    sortedPersons.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1;
        }
        if (a[property] > b[property]) {
            return 1;
        }
        return 0;
    });
    return sortedPersons;
}

/**
 * Main exercise app.
 */
(() => {
    initPersonsData();

    if(persons.length === 0) {
        console.log("Invalid initial data.");
        console.log("Program execution stopped!");
        process.exit();
    }

    addPersonRunDate();

    console.log("List of Active Persons:");
    logActivePersons();

    console.log("\nList of Sorted Persons By Name:");
    const sortedByName = sortPersonBy('Name');
    sortedByName.forEach(person => console.log(person.getFullLogData()));

    console.log("\nList of Sorted Persons By Status:");
    const sortedByStatus = sortPersonBy('Status');
    sortedByStatus.forEach(person => console.log(person.getFullLogData()));

    console.log("\nDone!\n");
})();