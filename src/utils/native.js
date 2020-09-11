import {AsyncStorage} from "react-native";

import {Notifications} from 'expo';
import * as Permissions from 'expo-permissions';

const NOTIFICATION_KEY = '@mobile-flash-cards-md:notifications';

const notification = {
    title: 'Take a quiz!',
    body: "✨ Repetition is the key to memorization! Take a quiz to freshen your memory!",
    ios: {
        sound: true,
    },
    android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true,
    }
};


export function clearNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function setTomorrowNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync().then(
                                () => {
                                    let tomorrow = new Date();
                                    tomorrow.setDate(tomorrow.getDate() + 1);
                                    tomorrow.setHours(12);
                                    tomorrow.setMinutes(0);
                                    tomorrow.setSeconds(0);

                                    Notifications.scheduleLocalNotificationAsync(
                                        notification,
                                        {
                                            time: tomorrow,
                                            repeat: 'day',
                                        }
                                    ).then(() => AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true)));

                                }
                            );
                        }
                    })
            }
        })
}