const persons = [new Person('Mary', 'Smith', 28), new Person('John', 'Smith', 35),
    new Person("Tigran", "Petrosian", 41), new Person('Peter', 'Jackson', 18)];

printArray(persons);

manualSort(persons, AgeDescending);

printArray(persons);

manualSort(persons, LengthOrAlphabet);

printArray(persons);


function AgeDescending (a, b) {
    return a.age - b.age
}

function LengthOrAlphabet (a, b) {
    if ((a.firstName.length + a.lastName.length) - (b.firstName.length + b.lastName.length)!==0)
    {
        return (a.firstName.length + a.lastName.length) - (b.firstName.length + b.lastName.length);
    }
    else if (a.firstName<b.firstName) {return -1;}
    else if (a.firstName>b.firstName) {return 1;}
    else if (a.lastName<b.lastName) {return -1;}
    else if (a.lastName>b.lastName) {return 1;}
      else {return 0;}
    }

function manualSort(person, comparator) {
    let len = person.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (comparator(person[j], person[j + 1]) > 0) {
                let t = person [j];
                person [j] = person [j + 1];
                person [j + 1] = t;
            }
        }
    }
}


function printArray(arr) {
    console.log('==================');
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    console.log('==================');
}

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`;
    }
}

