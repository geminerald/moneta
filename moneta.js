
function createMenu(menuData, parentElement) {
    menuData.forEach(item => {
        const itemButton = document.createElement(item.isCopyNote ? "button" : "div");
        itemButton.className = item.isCopyNote ? "copy-btn" : "dropdown-btn";
        itemButton.textContent = item.name;
        
        // If it's a copy note, add tooltip and copy functionality
        if (item.isCopyNote) {
            itemButton.onclick = (event) => copyNote(event);

            itemButton.onmouseover = (event) => showTooltip(event, item.tooltip);
            itemButton.onmouseout = hideTooltip;

            // Tooltip element
            const tooltip = document.createElement("span");
            tooltip.className = "tooltip";
            tooltip.textContent = item.tooltip;
            itemButton.appendChild(tooltip);
        }
        
        parentElement.appendChild(itemButton);

        // If the item has children, create a container for them
        if (item.children) {
            const childContainer = document.createElement("div");
            childContainer.className = "dropdown-content";
            createMenu(item.children, childContainer);
            
            // Append child container and handle hover for showing children
            itemButton.appendChild(childContainer);
            itemButton.onmouseover = () => { childContainer.style.display = "block"; };
            itemButton.onmouseout = () => { childContainer.style.display = "none"; };
        }
    });
}

function copyNote(event) {
    // Get the tooltip text from the current button's child element with class "tooltip"
    const tooltipText = event.target.querySelector(".tooltip").textContent;

    // Copy the tooltip text to the clipboard
    navigator.clipboard.writeText(tooltipText).then(() => {
        console.alert("Note copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}


function showTooltip(event, tooltipText) {
    const tooltip = event.target.querySelector(".tooltip");
    tooltip.style.visibility = "visible";
}

function hideTooltip(event) {
    const tooltip = event.target.querySelector(".tooltip");
    tooltip.style.visibility = "hidden";
}

// Initialize the menu
const menuContainer = document.querySelector("#menuContainer");
createMenu(menuData, menuContainer);
