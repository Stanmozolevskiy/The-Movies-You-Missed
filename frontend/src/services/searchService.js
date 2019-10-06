// search
export function handleSearch(e) {
    if (e.key === "Enter") {
        window.location.href = `/search/${e.target.value}`
    }
};
