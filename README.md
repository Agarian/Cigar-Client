# Cigar-Agarian
A heavily modified agar.io client.

### DISCLAIMER
- I do not own any of the original client's code.
- Find the original at https://github.com/CigarProject/Cigar
- Some code was also pulled from https://github.com/Fan7asy/Client
- If you cannot connect to your localhost server, it's likely because the github.io link enforces `wss://` (Secure WebSocket), which localhosts do not support. In that case, you will want to download the client itself.

### Brief description
 - This is a modified Agar.io client with many modifications!
 - There is a lot of customization available with this client!
 - The client has relatively high performance.
 
### Additions to this client (with respect to CigarProject)
 - Show Cell Border: Shows a subtle dark border around the edge of a cell (from Agar.io).
 - Show Positon: Shows your position in a server's map.
 - Show Map Borders: Shows a line across the borders of a server's map.
 - Show Map Sectors: Shows sectors on a server's map.
 - Show Map Grid: Shows the grid that usually exists on a server's map.
 - Name Shadows: Makes names larger, along with giving them a black border (from Agar.io).
 - Map Border Color: Lets you edit the color of the map border.
 - Map Sector Color: Lets you edit the color of the map sectors.
 - LB Text Color: Lets you edit the color of your name on a leaderboard.
 - Name Text Color: Lets you edit the color of your name in the game.
 - Cell Border Color: Lets you edit the color of the cell borders.
 - Cell Border Size: Lets you edit the size of the cell borders.
 - Infinite Zoom: Lets you zoom out as much as you want (mouse scroll).
  
### Things I want to add (TO DO)
- A minimap.
- More performance efficient cell borders (for the `showCellBorder` option).
- A working skins list (the current one doesn't work with an `https://`, or a `file:///` URL).
- A list of popular private servers.
  
### Other things
- Show Grid was already in the client, though wouldn't work with the Dark Theme.
- Hide Chat was broken in the client, until now.
- Recommended page zoom is anywhere between 75% and 90%.
 
### Connecting to servers
- Next to the name box, there is a drop down menu with 3 options:
- Solo Server 443, Solo Server 4444, and Solo Server 8080.
- Note those are for if you're running the server on your PC.
- If you want to connect to a custom server, do the following:
- Put the server's IP in the Ip text box, or:
- First press the F12 key (or CTRL+SHIFT+I), then click the console tab at the top.
- Then type in the following: `setServer("serverIP:port")`.
- The client also has this tutorial at the bottom of the overlay.

### Screenshot (may add more later)
![_client](https://user-images.githubusercontent.com/23372586/35252035-74e6ebaa-ffac-11e7-9efc-3f1c150b38cf.png)
