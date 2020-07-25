Build a service that returns the following properties in JSON when passed a URL:

- Page title
- Page description
- Primary image (Biggest image on page)

The service should be usable by adding the URL to be parsed as a suffix to the service URL. What this means is if for example the service URL is http://get.meta, I should be able to get those JSON parameters for the URL bbc.com/news/world-latin-america-53388656 by entering this in the browser address bar:
http://get.meta/bbc.com/news/world-latin-america-53388656 (See metta.photo as an example)

Dockerize the app and push to a Git repo of your choice. (Tip: Use a cache to prevent having to request the same URLs multiple times)

To Start the application
create a .env file from the sample.env provided in the app,

#Todo!

create validation for endpoint

set realuser agents
set other request headers
set referer
