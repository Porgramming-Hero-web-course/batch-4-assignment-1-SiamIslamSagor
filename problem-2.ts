{
  /* -------------------------------------------- */

  type NumArr = number[];

  function removeDuplicates(numbers: NumArr): NumArr {
    const uniqueNumArr: NumArr = [];
    numbers.forEach(currentNum => {
      if (uniqueNumArr.indexOf(currentNum) === -1) {
        uniqueNumArr.push(currentNum);
      } else {
        console.log(
          `${currentNum} is already exist in unique array! [${uniqueNumArr}]`
        );
      }
    });

    return uniqueNumArr;
  }

  /* -------------------------------------------- */
}
