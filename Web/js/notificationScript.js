document.getElementById("notifyBtn").addEventListener("click", () => {
    const title = document.getElementById("titleInput").value.trim();
    const message = document.getElementById("messageInput").value.trim();
    const icon = document.getElementById("iconInput").value.trim();

    if (!title || !message || !icon) {
        alert("Please enter a title, message, and icon first before clicking the button");
        return;
    }

    if (!("Notification" in window)) {
        alert("This browser does not support desktop notifications");
        return;
    }

    //ask for permission
    if (Notification.permission === "granted") {
        showNotification(title, message, icon);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                showNotification(title, message, icon);
            }
        });
    }
});

function showNotification(title, message, icon) {
    new Notification(title, {
        body: message, 
        icon: icon
    });
}