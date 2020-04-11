const input = document.getElementById("inp");
const button = document.getElementById("bt");
button.addEventListener("click", sha1)

async function sha1() {
    const str = input.value;
    const buffer = new TextEncoder("utf-8").encode(str);
    const hash = await crypto.subtle.digest("SHA-1", buffer);
    input.value = hex(hash);
}

function hex(buffer) {
    const hexCodes = [];
    const view = new DataView(buffer);
    for (var i = 0; i < view.byteLength; i += 4) {
        const value = view.getUint32(i)
        const stringValue = value.toString(16);
        const padding = '00000000'
        const paddedValue = (padding + stringValue).slice(-padding.length)
        hexCodes.push(paddedValue);
    }
    return hexCodes.join("");
}