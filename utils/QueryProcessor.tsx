export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    return ( "Your usb id is 19-10336" );
  }

  if (query.toLowerCase().includes("name")) {
    return ( "Anya" );
  }
  if (query.includes("plus")) {
    const parts = query.split(" ");
    const num1 = parseInt(parts[2], 10);
    const num2 = parseInt(parts[4], 10);
    console.log((num1 + num2).toString())
    return (num1 + num2).toString();
  }
  if (query.includes("multiplied by")) {
    const parts = query.split(" ");
    const num1 = parseInt(parts[2], 10);
    const num2 = parseInt(parts[4], 10);
    console.log((num1 + num2).toString())
    return (num1 * num2).toString();
  }
  if (query.includes("Which of the following numbers is the largest:")) {
    const parts = query.split(":");
    const numbers = parts[1].split(",").map((num) => parseInt(num.trim(), 10));
    if (numbers[0] > numbers[1] && numbers[0] > numbers[2]) {
      return numbers[0].toString();
    } else if (numbers[1] > numbers[0] && numbers[1] > numbers[2]) {
      return numbers[1].toString();
    } else {
      return numbers[2].toString();
    }
  }
  if (query.includes("Which of the following numbers is both a square and a cube:")) {
    const parts = query.split(":");
    const numbers = parts[1].split(",").map((num) => parseInt(num.trim(), 10));
    for (let i = 0; i < numbers.length; i++) {
      const sqrt = Math.sqrt(numbers[i]);
      const cbrt = Math.cbrt(numbers[i]);
      if (sqrt === Math.floor(sqrt) && cbrt === Math.floor(cbrt)) {
        return numbers[i].toString();
      }
    }
  }

  return "";
}
