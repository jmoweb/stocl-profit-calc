function calculateProfit() {
  const shares = parseFloat(document.getElementById("shares").value);
  const entryPrice = parseFloat(document.getElementById("entryPrice").value);
  const exitPrice = parseFloat(document.getElementById("exitPrice").value);

  if (isNaN(shares) || isNaN(entryPrice) || isNaN(exitPrice)) {
    document.getElementById("profitOutput").innerText = "Please fill all profit fields.";
    return;
  }

  const profit = (exitPrice - entryPrice) * shares;
  const percentage = ((exitPrice - entryPrice) / entryPrice) * 100;

  document.getElementById("profitOutput").innerText =
    `Profit: $${profit.toFixed(2)} (${percentage.toFixed(2)}%)`;
}

function calculateTargetPrice() {
  const entryPrice = parseFloat(document.getElementById("targetEntry").value);
  const desiredProfit = parseFloat(document.getElementById("desiredProfit").value);

  if (isNaN(entryPrice) || isNaN(desiredProfit)) {
    document.getElementById("targetOutput").innerText = "Please fill all target fields.";
    return;
  }

  const targetPrice = entryPrice * (1 + desiredProfit / 100);

  document.getElementById("targetOutput").innerText =
    `To earn ${desiredProfit}% profit, sell at $${targetPrice.toFixed(2)}`;
}
