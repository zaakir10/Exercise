       function changeContent() {
            // Change textContent
            const title = document.getElementById("title");
            title.textContent = "Updated Heading Text";

            // Change textContent
            const description = document.getElementById("description");
            description.textContent = "The paragraph text has been changed!";

            // Change innerHTML
            const box = document.getElementById("box");
            box.innerHTML = "<em>New HTML inserted inside the box!</em>";

            console.log("Content updated successfully!");
        }