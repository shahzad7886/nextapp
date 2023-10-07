function copyToClipboard(targetId) {
  var linkValue = document.getElementById(targetId).getAttribute("data-link");
  var tempInput = document.createElement("input");
  tempInput.value = linkValue;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  var icon = document.getElementById("copyLinkIcon" + targetId);
  var tooltip = document.getElementById("tooltip" + targetId);

  icon.style.display = "block"; // Hide the icon
  tooltip.style.display = "block"; // Show the tooltip

  setTimeout(function () {
    tooltip.style.display = "none"; // Hide the tooltip after 1 second
    icon.style.display = "inline-block"; // Show the icon again
  }, 1000); // Hide everything after 1 second
}