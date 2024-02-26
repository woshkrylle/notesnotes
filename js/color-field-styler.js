/*
    The code below is used to apply the selected background color 
    to the textarea fields automatically.
    DO NOT EDIT THIS CODE 
*/

/**
 * Converts from hexadecimal value in string to an rgb oject.
 * 
 * Code taken from StackOverflow User, Tim Down. Apr 2011, edited Nov 2022
 * link: https://stackoverflow.com/a/5624139
 * @param {String} hex hexadecimal value in string
 * @returns a 3-property number object representing red, green, and blue, respectively.
 */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

/**
 * Automatically decides whether to use white or black foreground color 
 * based from an input background color.
 * 
 * Code derived from StackOverflow User, Mark Ransom. Oct 2010, edited May 2022
 * link: https://stackoverflow.com/a/3943023
 * @param {[Number]} colorVal a 3-element array representing the value for red, green, and blue, respectively.
 * @returns white or black hexadecimal value
 */
function getFontColorAuto(colorVal) {
    const rgb = hexToRgb(colorVal);
    if ((rgb['r']*0.299 + rgb['g']*0.587 + rgb['b']*0.114) > 186)
        return `#000000`; 
    else 
        return `#ffffff`;
}

let cfield = document.querySelector('#card-color');
let fcardTxt = document.querySelector('#front-card-field');
let bcardTxt = document.querySelector('#back-card-field');

cfield.addEventListener('input', (e) => {
    const fontColor = getFontColorAuto(cfield.value);

    fcardTxt.style = `background-color:${cfield.value}; color: ${fontColor};`;
    bcardTxt.style = `background-color:${cfield.value}; color: ${fontColor};`;
});