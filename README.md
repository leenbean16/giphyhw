# GifTastic

### Overview

Using the GIPHY API to make a dynamic web page that populates with gifs. Calling the GIPHY API and use JavaScript and jQuery to change the HTML of my site.

![GIPHY](Images/1-giphy.jpg)

### Before I Begin

1. **Hit the GIPHY API**

   * Fooled around with the GIPHY API. [You can read more here](https://github.com/Giphy).

   * Read about GIPHY parameters (hint, hint): 

     * `q`
     * `limit`
     * `rating`

   * Like many APIs, GIPHY requires developers to use a key to access their API data. Their public API Key is [provided here](https://github.com/Giphy/GiphyAPI#overview). 

### Instructions

Created an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`. 

  * I chose vacations.

App should take the topics in this array and create buttons in your HTML.

   * Used a loop that appends a button for each string in the array.

3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 

4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

5. Under every gif, display its rating (PG, G, so on). 

   * This data is provided by the GIPHY API.
   * Only once you get images displaying with button presses should you move on to the next step.

6. Added a form to my page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

7. **Rejoice**! You just made something really cool.
