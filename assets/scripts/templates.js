function getTemplate(id) {
    const template = document.getElementById(id)
    let template_copy = template.cloneNode(true)
    return template_copy.content
}