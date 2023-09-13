document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generate-btn");
  const urlsTextarea = document.getElementById("urls");

  generateButton.addEventListener("click", function () {
    const urls = urlsTextarea.value.split("\n");
    const source = document.getElementById("source").value;
    const medium = document.getElementById("medium").value;
    const campaign = document.getElementById("campaign").value;
    const content = document.getElementById("content").value;
    const term = document.getElementById("term").value;

    let utmUrls = "";

    urls.forEach(function (url) {
      // Trim leading and trailing spaces from the URL
      url = url.trim();

      // Check if the URL is not empty
      if (url.length > 0) {
        // Add "https://" to the URL if it doesn't already start with it
        if (!url.startsWith("https://")) {
          url = "https://" + url;
        }

        // Construct the UTM parameters
        const utmParams = `?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}&utm_content=${content}&utm_term=${term}`;

        // Append the UTM parameters to the URL
        const utmUrl = url + utmParams;

        // Append the UTM URL to the result
        utmUrls += utmUrl + "\n";
      }
    });

    // Display the generated UTM URLs in the result div
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";
    resultDiv.innerHTML = `<p>Generated UTM URLs:</p><textarea rows="10" cols="50">${utmUrls}</textarea>`;
  });
});
