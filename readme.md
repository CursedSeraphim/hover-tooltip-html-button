# Tooltip functionalities

This repository demonstrates three types of tooltip functionalities in pure HTML, CSS, and JavaScript. 

## Folders

### `/hover-text`

This directory contains a simple hover tooltip functionality. The text box will appear when you hover over the "Hover me" text and will disappear as soon as the mouse pointer is moved away. 

#### How it works

This functionality is achieved purely by CSS. The text box is absolutely positioned relative to the hover element. Its visibility is controlled by changing the `opacity` and `transform` properties on hover.

### `/permanence-button`

This directory shows an enhanced version of the previous functionality. Here, the text box will not only appear when you hover over the text, but will also stay visible when the button is clicked. Clicking the button again will hide the box. 

#### How it works

This functionality is achieved through a combination of CSS and JavaScript. The CSS rules are the same as in the previous version. A click event listener is added to the text. When the text is clicked, a class is toggled on the parent hover element, making the text box permanently visible / toggling permanent visibility.

### `/permanence-button-click-anywhere-to-deselect`

This directory shows the a slightly different version of the tooltip. The text box will appear when you hover over the text, stay visible when the text is clicked, and will also hide when an area anywhere outside is clicked.

#### How it works

This functionality builds upon the previous version and adds one more feature. A click event listener is added to the entire document. When a click occurs outside the hover element, the 'active' class is removed from all active hover elements, hiding any visible text boxes. You may need to adjust and additionally filter this to only hide the visible text you want to hide.
