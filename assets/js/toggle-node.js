function toggleVisibilityEvent({event, target="", oneTime=false, callback} = {}) {
    const element = event.target;
    return toggleVisibility({element, target, oneTime, callback});
}

function toggleVisibility({element, target="", oneTime=false, callback} = {}) {
    let exit = 0;
    if (oneTime) {
        element.classList.toggle("hidden");
    }

    if (target.length > 0) {
        const targetElement = element.closest(target);
        targetElement.classList.toggle("hidden");
    }

    if (callback) {
        callback()
    }

    return exit;
}
