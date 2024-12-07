import React, { useEffect } from 'react';

const NotificationComponent = () => {
    useEffect(() => {
        const socket = new WebSocket('ws://127.0.0.1:8000/ws/notifications/');

        socket.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (Notification.permission === "granted") {
                new Notification("Новое уведомление", {
                    body: data.message,
                });
            } else if (Notification.permission !== "denied") {
                Notification.requestPermission().then(permission => {
                    if (permission === "granted") {
                        new Notification("Новое уведомление", {
                            body: data.message,
                        });
                    }
                });
            }
        };

        return () => socket.close();
    }, []);

    return <div>Listening for notifications...</div>;
};

export default NotificationComponent;