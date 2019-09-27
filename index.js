let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#FF69B4";

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });

  const moveDodgerLeft = () => {
    let leftNumbers = dodger.style.left.replace("px", "");  // string.replace(searchvalue, newvalue)
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  const moveDodgerRight = () => {
    let leftNumbers = dodger.style.left.replace("px", "");  
    let left = parseInt(leftNumbers, 10);

    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  }


