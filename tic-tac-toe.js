var block = document.getElementsByClassName('col-sm')
var turn = 1

function checkWin(currentClickedIdx) {
  console.log("Hello");
}

function putX_O(idx) {
  if (turn < 10) {

    var clickedBlock = block[idx]

      if (clickedBlock.innerText.length == 0) {
        if (turn % 2 == 0) {
          clickedBlock.innerText ="O"
          turn += 1
          checkWin(idx)
        }
        else {
          clickedBlock.innerText ="X"
          turn += 1
          checkWin(idx)
      }
    }
  }
}
