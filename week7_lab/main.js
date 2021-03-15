function Bunny(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "image of bunny";
    this.image = "images/bunny.png";
}

function Duck(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "image of duck";
    this.image = "images/duck.png";
}

function Elephant(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "image of elephant";
    this.image = "images/elephant.png";
}

let animals = [new Bunny(), new Duck(), new Elephant()];
let names = ["kate", "bob", "jefe"]; 

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    let randomIndex = generateRandomIndex(3);
    return names[randomIndex];
}

function generateRandomAge() {
    return generateRandomIndex(10);
}

function generateRandomAnimal() {
    let randomIndex = generateRandomIndex(3);
    let randomAnimal = animals[randomIndex];

    if (randomAnimal instanceof Bunny) {
        return new Bunny(generateRandomName(), generateRandomAge()); 
    } else if (randomAnimal instanceof Duck) {
        return new Duck(generateRandomName(), generateRandomAge())
    } else if (randomAnimal instanceof Elephant) {
        return new Elephant(generateRandomName(), generateRandomAge());
    }
}

function onLoad() {
    let animal = generateRandomAnimal();
    console.log(animal)
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
}
