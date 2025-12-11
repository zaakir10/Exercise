

function addItem() {
            const list = document.querySelector("#itemList");

            // Create a new list item
            const newItem = document.createElement("li");
            newItem.textContent = "New Item";

            // Add it to the list
            list.appendChild(newItem);

            console.log("Item added!");
        }

        function removeItem() {
            const list = document.querySelector("#itemList");

            if (list.lastElementChild) {
                list.removeChild(list.lastElementChild);
                console.log("Last item removed!");
            } else {
                alert("No items on the list!");
            }
        }