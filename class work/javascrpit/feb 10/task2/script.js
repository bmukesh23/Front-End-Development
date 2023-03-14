const arr1 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const arr2 = [110, 120, 130, 140, 150, 160, 170, 180, 190, 200];

function RemoveNum(arr, remove) {
  const narr = [];
  for (let i = 0; i < arr.length; i++) {
    if (remove !== arr[i]) {
      narr.push(arr[i]);
    }
  }

  console.log(narr);
  return narr;
}

const remove = Number(prompt("Enter the number you want to remove from first array"));
const narr = RemoveNum(arr1, remove);

const index1 = Number(prompt("Enter the array for first to confirm"));
alert(`${narr.indexOf(index1)}`); 

const remove2 = Number(prompt("Enter the number you want to remove from second array"));
const narr2 = RemoveNum(arr2, remove2);

const index2 = Number(prompt("Enter the array for second to confirm"));
alert(`${narr2.indexOf(index2)}`); 