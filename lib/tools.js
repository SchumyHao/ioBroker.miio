/**
 * Tests whether the given variable is a real object and not an Array
 * @param {any} it The variable to test
 * @returns {it is Record<string, any>}
 */
function isObject(it) {
    // This is necessary because:
    // typeof null === 'object'
    // typeof [] === 'object'
    // [] instanceof Object === true
    return Object.prototype.toString.call(it) === "[object Object]";
}

/**
 * Tests whether the given variable is really an Array
 * @param {any} it The variable to test
 * @returns {it is any[]}
 */
function isArray(it) {
    if (typeof Array.isArray === "function") return Array.isArray(it);
    return Object.prototype.toString.call(it) === "[object Array]";
}

function RGBToHex(rgb){
    //RGB format is [255,255,255]
    let hexColor = "#";
    const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 3; i++) {
        let r = null;
        let c = rgb[i];
        let pos = 0;
        const hexAr = [];
        while (c > 16) {
            r = c % 16;
            c = (c / 16) >> 0;
            hexAr.push(hex[r]);
            pos++;
        }
        hexAr.push(hex[c]);
        if (pos === 0) {
            hexAr.push("0");
        }
        hexColor += hexAr.reverse().join("");
    }
    return hexColor;
}

function HextoRGB(hex) {
    const rgb = [];
    const rawHex = hex.replace(/^#/, "");

    for (let i = 0; i < 3; i++) {
        const r = rawHex.substring(i*2, i*2+2);
        rgb.push(parseInt(r, 16));
    }
    return rgb;
}

function objectExtend(target, source) {
    if (!source) {
        return target;
    }
    if (source.delete) {
        return {};
    }
    for (const obj in source) {
        if (!target.hasOwnProperty(obj)) {
            target[obj] = source[obj];
        } else {
            if (isObject(source[obj])) {
                const t = objectExtend(target[obj], source[obj]);
                if (JSON.stringify(t) === "{}") {
                    delete target[obj];
                } else {
                    target[obj] = t;
                }
            } else {
                target[obj] = source[obj];
            }
        }
    }
    return target;
}

module.exports = {
    isArray,
    isObject,
    RGBToHex,
    HextoRGB,
    objectExtend
};
