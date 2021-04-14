export function applyStyles(dom, ...styles) {

    let targetStyle = {},
        value;

    for (const style of styles) {

        targetStyle = {
            ...targetStyle,
            ...style
        }
    }

    console.log(targetStyle);

    for (const key in targetStyle) {

        value = targetStyle[key];

        dom.style[key] = value;
    }
}