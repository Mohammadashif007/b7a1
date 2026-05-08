function filterEvenNumbers(arr: number[]): number[] {
    const evenNumbers: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

function reverseString(str: string): string {
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}


type StringOrNumber = string | number;

function checkType (strOrNum: StringOrNumber): string {
    if (typeof strOrNum === "string") {
        return "String";
    } else if (typeof strOrNum === "number") {
        return "Number";
    } else {
        throw new Error("Invalid type");
    }
}



function getProperty<T>(obj: T, key: keyof T): T[keyof T] {
    return obj[key];
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
}

interface BookIsRead extends Book {
    isRead: boolean;
}

function toggleReadStatus(obj: Book): BookIsRead {
    return {
        title: obj.title,
        author: obj.author,
        publishedYear: obj.publishedYear,
        isRead: true,
    };
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

function getIntersection(arr1: number[], arr2: number[]): number[] {
    const newArr:number[] = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                newArr.push(arr1[i]);
            }
        }
    }
    return newArr;
}


