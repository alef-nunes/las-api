const URLS_VALIDAS = ["https://randomuser.me/api/portraits/women/75.jpg"];

function fetch(url) {
    return Promise.resolve(url ? { status: 200 } : { status: 404 });
}

module.exports = fetch;