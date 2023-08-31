document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("generate-btn").addEventListener("click", function() {
        const urlsText = document.getElementById("urls").value;
        const urls = urlsText.split("\n").map(url => url.trim());
        const utmParams = {
            utm_source: document.getElementById("source").value,
            utm_medium: document.getElementById("medium").value,
            utm_campaign: document.getElementById("campaign").value,
            utm_content: document.getElementById("content").value,
            utm_term: document.getElementById("term").value,
        };

        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = "<h2>Generated UTM URLs:</h2>";
        urls.forEach((url, index) => {
            const utmUrl = generateUtmUrl(url, utmParams);
            resultDiv.innerHTML += `<p>${index + 1}. ${url} => ${utmUrl}</p>`;
        });
        resultDiv.style.display = "block";
    });

    function generateUtmUrl(base_url, utm_params) {
        const parsedUrl = new URL(base_url);
        const queryParams = new URLSearchParams(parsedUrl.search);

        for (const key in utm_params) {
            if (utm_params.hasOwnProperty(key) && utm_params[key]) {
                queryParams.set(key, utm_params[key]);
            }
        }

        parsedUrl.search = queryParams.toString();
        return parsedUrl.toString();
    }
});
