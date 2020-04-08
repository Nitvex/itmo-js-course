const input = document.getElementById("inp");
const button = document.getElementById("bt");
button.addEventListener("click", logSha1)

async function logSha1(str) {
    const buffer = new TextEncoder('utf-8').encode(str);
    const digest = await crypto.subtle.digest('SHA-1', buffer);
    const result = Array.from(new Uint8Array(digest)).map(x => x.toString(16).padStart(2, '0')).join('');
    input.value = result;
}