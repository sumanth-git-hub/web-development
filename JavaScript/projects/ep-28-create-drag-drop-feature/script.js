document.addEventListener("DOMContentLoaded", (e) => {
    let lists = document.querySelectorAll(".list");
    const heading = document.getElementById("heading-component");
    const dropZones = document.querySelectorAll(".dropzone");


    // dragStart function to select the elements to drag
    function dragStarter(element) {
        element.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.id);
            console.log(e.target.id);
        });
    }

    lists.forEach((list) => {
        dragStarter(list);
    });

    dragStarter(heading);

     // dragOver and drop function to select sections to drop the elements in place

    function dragOverAndDrop(dropTarget){
        dropTarget.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        dropTarget.addEventListener("drop", (e) => {
            e.preventDefault();
            let id = e.dataTransfer.getData("text/plain");
            let draggableElements = document.getElementById(id);
            dropTarget.appendChild(draggableElements);
        })
    }
    
    dropZones.forEach(dropZone => {
        dragOverAndDrop(dropZone);
    });

     // dragOver and drop the elements in the body section 

    document.body.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    document.body.addEventListener("drop", (e) => {
        e.preventDefault();
            let id = e.dataTransfer.getData("text/plain");
            let draggableElements = document.getElementById(id);
            let closestElement = e.target.closest(".dropzone");  // Ensure elements can be dragged back from the body
            console.log(closestElement);
            if(closestElement){
                closestElement.appendChild(draggableElements)
                console.log(closestElement)
            }
            else {
                document.body.appendChild(draggableElements)
                console.log(draggableElements)
            }
    });

});