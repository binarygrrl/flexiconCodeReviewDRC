function classifyTriangle() {
    let input = getInput();
    let validInput = validateInput(input);
    if (!validInput) {
        return document.getElementById("result").innerHTML = "Error, please enter all input values";
    }
    let sides = validateSides(input);
    let type = sides ? getTriangleType(input.a, input.b, input.c) : 'Not a triangle';
    return document.getElementById("result").innerHTML = type;
}

const getInput = () => sides = { a: parseInt(document.getElementById('a').value, 10), b: parseInt(document.getElementById('b').value, 10), c: parseInt(document.getElementById('c').value, 10) };
const validateInput = (input) => (input && input.a && input.b && input.c);
const validateSides = (sides) => ((sides.a + sides.b > sides.c) && (sides.c + sides.b > sides.a) && (sides.a + sides.c > sides.b));
const getTriangleType = (a, b, c) => (a === b && b === c) && 'Equilateral' || (a === b || b === c || a === c) && 'Isosceles' || 'Scalene';