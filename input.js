/*
    => Note: Docs Is Writen By 'JsDoc';
    * filterName(name) Function Doc:
        - If The Name Is Empty => return 'Unknown';
        - If Name Start And End With Spaces => return it without trimmed;
        - If Name Width Greater Than 10 => return it by length = 10;
        - If Name Starts With _ => return it without _;
*/

function filterName(name) {
    if (name === undefined) {
        name = 'Unknown';
    }
    if (name.startsWith(' ') || name.startsWith(' ')) {
        name = name.trim();
    }
    if (name.length > 10) {
        name = name.substr(0, 10);
    }
    if (name.startsWith('_')) {
        name = name.replace('_', '');
    }
    if (name === 'hell') { // will not test => will show it on coverage;
        throw Error('This Name Is Not Allowed!');
    }
    return name;
}

module.exports = filterName;