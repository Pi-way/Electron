let client_width_checked = false
let client_width_is_xl = false
let last_client_width_is_xl = false

function resizeExplorerView() {

    // Resize explorer

    let explorer_view = document.getElementById("explorer-view")
    const body_padding = window.getComputedStyle(document.body).getPropertyValue("--body-padding")

    const explorer_view_rect = explorer_view.getBoundingClientRect()

    let height = (document.documentElement.clientHeight - explorer_view_rect.top) - parseInt(body_padding)
    let width = (document.documentElement.clientWidth - explorer_view_rect.left) - parseInt(body_padding)

    explorer_view.setAttribute("style", "width: " + width.toString() + "px; height: " + height.toString() + "px;")

    // Check breakpoints for sidebar

    let sidebar = document.getElementById("button-sidebar-create")

    //for the first time
    if (!client_width_checked) {
        if (document.documentElement.clientWidth > 1200) {
            client_width_is_xl = true
            last_client_width_is_xl = true
        } else {
            client_width_is_xl = false
            last_client_width_is_xl = false
        }
        client_width_checked = true
    }

    last_client_width_is_xl = client_width_is_xl
    // If the client is a XL or larger
    client_width_is_xl = document.documentElement.clientWidth > 1200;

    //breakpoint reached
    if (client_width_is_xl !== last_client_width_is_xl) {
        if (client_width_is_xl) {
            sidebar.setAttribute("class", "btn-group-vertical")
        } else {
            sidebar.setAttribute("class", "btn-group")
        }
    }
}

function templateTest() {
    let explorer = document.getElementById("explorer-view-files")
    for (let i = 0; i < 30; i += 1) {
        explorer.appendChild(getTemplate("file-template"))
    }
}

function loadTemplatesForTempTags() {
    let placeholders= document.getElementsByTagName("temp")

    console.log(placeholders)

    for(let i = 0; i < placeholders.length; i += 1) {
        let template_id = placeholders[i].getAttribute("template")
        console.log(template_id)
        placeholders[i].appendChild(getTemplate(template_id))
    }
}

document.addEventListener("DOMContentLoaded", resizeExplorerView)
document.addEventListener("DOMContentLoaded", templateTest)
document.addEventListener("DOMContentLoaded", loadTemplatesForTempTags)
window.addEventListener("resize", resizeExplorerView)
