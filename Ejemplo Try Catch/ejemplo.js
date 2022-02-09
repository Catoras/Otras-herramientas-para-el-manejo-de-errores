a = prompt("Enter a number: ")
b = prompt("Enter another number")

try {
    c = a / b
    if (isNaN(c))
        throw "a or b is not a number"
    console.log(c)
} catch (error) {
    console.log("Error: " + error)
}
