# utm-builder.github.io


Overview
The UTM Campaign Builder is a straightforward tool to streamline the creation of UTM parameters for your marketing campaigns. UTM parameters help you track and analyze campaign performance effectively.

UTM Parameters Explained

1. Source:
Definition: Identifies the origin of your traffic. Typically, it's the platform or website where the user clicked the link.
Example Scenario: If you're running a promotional campaign on Instagram, your source would be "instagram."
makefile

Example: utm_source=instagram

2. Medium:
Definition: Describes the type of traffic, such as email, social media, or CPC advertising.
Example Scenario: If you're sharing a link in an email newsletter, your medium could be "email."
makefile

Example: utm_medium=email

3. Campaign Name:

Definition: Helps track the performance of a specific marketing campaign or promotion.

Example Scenario: If you're launching a holiday discount campaign, your campaign name could be "holiday_discount."
makefile

Example: utm_campaign=holiday_discount

4. Term:

Definition: Often used in paid search to identify the keywords that triggered the ad.

Example Scenario: If you're bidding on the keyword "tech gadgets," your term could be "tech+gadgets."

Example: utm_term=tech+gadgets

5. Content:
Definition: Helps differentiate ads or links that point to the same URL, useful for A/B testing or identifying specific ad elements.
Example Scenario: If you're testing two different ad creatives, your content could be "ad_variant_A."

Example: utm_content=ad_variant_A

Combined Example:
Suppose you're running a Google Ads campaign for a summer sale (source: "google") using display ads (medium: "display"), specifically targeting the keyword "beachwear" (term: "beachwear") with two different ad creatives (content: "ad_variant_A"). The resulting UTM parameters could look like this:

Example URL: https://yourwebsite.com/products/?utm_source=google&utm_medium=display&utm_campaign=summer_sale&utm_term=beachwear&utm_content=ad_variant_A

These UTM parameters enable precise tracking, allowing you to analyze and optimize the performance of different aspects of your marketing strategy.

=======

How to Use

Create a New Campaign:

Click on "New Campaign."
Fill in source, medium, and campaign fields.
Customize UTM Parameters:

Adjust term and content fields as needed.
Preview and Generate URL:

See a live preview of your URL.
Click "Generate URL" to create the tracking link.


Copy the URL to your clipboard.
Optionally, shorten the URL.
Save and Manage Campaigns:

Save campaigns for future reference.
Access and edit saved campaigns.
Best Practices
Consistent Naming: Use consistent naming for UTM parameters.
Regular Cleanup: Periodically review and clean up old campaigns.
Contributing
We welcome contributions! Feel free to open issues or pull requests.

License
This project is licensed under the MIT License. Use, modify, and distribute as per the license terms.

Happy tracking! 🚀
