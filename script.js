document.addEventListener("DOMContentLoaded", () => {
    fetchUsers();
    fetchComments();
});

async function fetchUsers() {
    try {
        const usersList = document.getElementById('usersList');
        if (!usersList) {
            console.error("Элемент usersList не найден в DOM.");
            return;
        }

        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        response.data.forEach(user => {
            const li = document.createElement('li');
            li.textContent = `${user.name} (${user.email})`;
            usersList.appendChild(li);
        });
    } catch (error) {
        console.error("Ошибка при получении пользователей:", error);
    }
}

async function fetchComments() {
    try {
        const commentsList = document.getElementById('commentsList');
        if (!commentsList) {
            console.error("Элемент commentsList не найден в DOM.");
            return;
        }

        const response = await axios.get('https://jsonplaceholder.typicode.com/comments?_limit=15');
        response.data.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = `${comment.body}`;
            commentsList.appendChild(li);
        });
    } catch (error) {
        console.error("Ошибка при получении комментариев:", error);
    }
}
