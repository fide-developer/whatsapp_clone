import { useEffect, useState } from "react"
import { MdNotificationsOff } from "react-icons/md"
import Colors from "../../GlobalUses/Constant/color"
import { IconNotification, NotificationText, NotificationContainer } from "./StyledComp"
import { notificationAccessibility } from "./type"

const NotificationPanel: React.FC = () => {

    const [notificationAccess, setNotificationAccess] = useState<notificationAccessibility>()

    const CHECK_NOTIFICATION = async () => {
        
        try{
            const {state} = await navigator.permissions.query({
                name: "notifications"
            })
    
            switch(state){
                case "granted":
                    // showLocalNewsWithGeolocation();
                    setNotificationAccess(notificationAccessibility.granted)
                    break;
                case "prompt":
                    setNotificationAccess(notificationAccessibility.prompt)
                    // showButtonToEnableLocalNews();
    
                    console.log(notificationAccess)
                    
                    break;
                case "denied":
                    setNotificationAccess(notificationAccessibility.denied)
                    // showNationalNews();
                    break;
            }
        }catch{
            console.log("error")
        }
    }

    const ENABLE_NOTIFICATION = () => {

        Notification.requestPermission((result)=> {
            console.log(result)
        })
    }
    useEffect(()=>{
        CHECK_NOTIFICATION()
        
    },[notificationAccess])

    return(
        <NotificationContainer onClick={()=> ENABLE_NOTIFICATION()} color={Colors.notification.suggest}>
            <IconNotification>
                <MdNotificationsOff color={Colors.notification.suggest} size="1.5em"/>
            </IconNotification>
            <NotificationText>
                <div>Get notified of new messages</div>
                <a>Turn on dekstop notification &gt;</a>
            </NotificationText>
        </NotificationContainer>
    )
}

export default NotificationPanel