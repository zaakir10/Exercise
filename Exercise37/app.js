  const posts = JSON.parse(localStorage.getItem("posts")) || [];
        const editIndex = null;

        function savePosts() {
            localStorage.setItem("posts", JSON.stringify(posts));
        }

        function renderPosts() {
            const postsDiv = document.getElementById("posts");
            postsDiv.innerHTML = "";

            posts.forEach((post, index) => {
                const postDiv = document.createElement("div");
                postDiv.className = "post";

                postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    ${post.image ? `<img src="${post.image}">` : ""}
                    <p>${post.content}</p>
                    <div class="post-actions">
                        <button class="edit-btn" onclick="editPost(${index})">Edit</button>
                        <button class="delete-btn" onclick="deletePost(${index})">Delete</button>
                    </div>
                `;

                postsDiv.appendChild(postDiv);
            });
        }

        function addPost() {
            const title = document.getElementById("title").value.trim();
            const image = document.getElementById("image").value.trim();
            const content = document.getElementById("content").value.trim();

            if (!title || !content) {
                alert("Title and content are required!");
                return;
            }

            if (editIndex !== null) {
                posts[editIndex] = { title, image, content };
                editIndex = null;
            } else {
                posts.push({ title, image, content });
            }

            savePosts();
            renderPosts();
            clearForm();
        }

        function editPost(index) {
            const post = posts[index];
            document.getElementById("title").value = post.title;
            document.getElementById("image").value = post.image;
            document.getElementById("content").value = post.content;
            editIndex = index;
        }

        function deletePost(index) {
            if (confirm("Delete this post?")) {
                posts.splice(index, 1);
                savePosts();
                renderPosts();
            }
        }

        function clearForm() {
            document.getElementById("title").value = "";
            document.getElementById("image").value = "";
            document.getElementById("content").value = "";
        }

        renderPosts();