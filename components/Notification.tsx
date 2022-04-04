interface NotificationProps {
    notif_type: string
    message: string;
}

export function Notification (props: NotificationProps) {

        const notification_types = () => {
            if (props.notif_type === 'error-notification') {
                return 'red';
            }
    
            else if (props.notif_type === 'success-notification') {
                return 'green';
            }
    
            else if (props.notif_type === 'regular-notification') {
                return 'yellow';
            }
        }
        
        const styles: Properties<string | number, string & {}> = {
            width: '100%',
            height: 'auto',
            backgroundColor: notification_types(),
            color: '#fff',
            border: '1px solid ' + notification_types(),
            opacity: 0.8,
            padding: '8px',
            textAlign: 'center',
            marginTop: '5px',
            fontWeight: 400
        }
    
        return (
            <p data-notification-type={props.notif_type} style={styles}> {props.message} </p>
        )
    }