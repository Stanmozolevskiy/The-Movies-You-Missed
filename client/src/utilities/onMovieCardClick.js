
export default function onMovieCardClick(data, props) {
    if (props === "movies") {
        window.location = `/movies/${data.id}`
    }
    if (props === "tv") {
        window.location = `/tv/${data.id}`
    }
    if (props.location.pathname == "/movies" && props.location.pathname) {
        window.location = `/movies/${data.id}`
    }
    if (props.location.pathname && props.location.pathname == "/tv") {
        window.location = `/tv/${data.id}`
    }
    else {
        window.location = `/movies/${data.id}`
    }

}
