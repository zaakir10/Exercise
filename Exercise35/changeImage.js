        function changeImage() {
            const image = document.getElementById("myImage");

            // 1. Ask for new image URL (using setAttribute)
            const url = prompt("Enter new image URL:");
            if (url) {
                image.setAttribute('src', url); 
            }

            // 2. Border color
            const borderColor = prompt("Enter border color (e.g., red, blue, #000):");
            if (borderColor) {
                image.style.borderColor = borderColor;
            }

            // 3. Width (px)
            const width = prompt("Enter width in pixels (e.g., 200):");
            if (width) {
                image.style.width = width + "px";
            }

            // 4. Height (px)
            const height = prompt("Enter height in pixels (e.g., 200):");
            if (height) {
                image.style.height = height + "px";
            }

            // 5. Border radius (px)
            const radius = prompt("Enter border radius in pixels (e.g., 10):");
            if (radius) {
                image.style.borderRadius = radius + "px";
            }

            console.log("Image updated successfully!");
        }
