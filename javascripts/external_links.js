/* docs/javascripts/external_links.js */

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a")
    links.forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute("target", "_blank")
            link.setAttribute("rel", "noopener noreferrer") // 安全建议
        }
    })
})
