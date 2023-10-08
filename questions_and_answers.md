<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `{}`

<i>Write your explanation here</i>
A variable greeting is declared but not initialized initially.
Later, it is assigned an empty object {}.
Finally, it logs the value of greeting to the console, which will display an empty object {}.
</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: `"12"`

<i>Write your explanation here</i>
The provided JavaScript code defines a function sum that takes two arguments a and b and returns their sum. It then calls this function with the arguments 1 and "2". Due to JavaScript's type coercion, the function treats the number 1 and the string "2" as a string concatenation operation, resulting in the string "12" as the output.
</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - A: `['🍕', '🍫', '🥑', '🍔']`

<i>Write your explanation here</i>
The code creates an array food with food emoji elements and an object info with a property favoriteFood initially set to the first element of the food array. Later, it reassigns info.favoriteFood to a different emoji, "🍝." However, this reassignment doesn't affect the original food array, which remains unchanged. The code logs the original food array, resulting in ["🍕", "🍫", "🥑", "🍔"] being printed to the console.
</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - B: `Hi there, undefined`

<i>Write your explanation here</i>
It will print "Hi there, undefined" to the console because it's concatenating the string "Hi there, " with the value of name, which is undefined in this case.
</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: - C: 3

<i>Write your explanation here</i>
The code initializes a variable count to 0 and an array nums with numbers [0, 1, 2, 3]. It then uses the forEach method to iterate through the elements of nums. For each element, if the element is not 0 (meaning it's truthy), it increments the count by 1. Finally, it logs the value of count, which represents the count of truthy elements in the nums array. In this case, it logs 3 because there are three truthy values (1, 2, and 3) in the array.
</p>
</details>
