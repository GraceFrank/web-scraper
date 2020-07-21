Build a service that returns the following properties in JSON when passed a URL:

- Page title
- Page description
- Primary image (Biggest image on page)

The service should be usable by adding the URL to be parsed as a suffix to the service URL. What this means is if for example the service URL is http://get.meta, I should be able to get those JSON parameters for the URL bbc.com/news/world-latin-america-53388656 by entering this in the browser address bar:
http://get.meta/bbc.com/news/world-latin-america-53388656 (See metta.photo as an example)

Dockerize the app and push to a Git repo of your choice. (Tip: Use a cache to prevent having to request the same URLs multiple times)

#Todo!
Be able to read page Title
Be able to read page description
Be able to get all images on page
Be able to get to find image size
Be able to find biggest image
be able to get image href
create a server
create endpoint
create validation for endpoint
create a nice response for end point
handle error 
handle call to anyother endpoint
Create Descriptive error message
containerise app
add redis
enable caching
enable parsing of urls to determine urls that may be the same
contianerise redis
set realuser agents
set other request headers
set referer
