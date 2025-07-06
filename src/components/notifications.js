
export class Notification{
    constructor(notificationText,notificationType,targetNotification){
        this.text = notificationText
        this.type = notificationType
        this.targetNot = targetNotification
        this.mostrar()
    }

    mostrar(){
        const notificationNode = document.createElement('DIV')
        notificationNode.classList.add("rounded-lg", 'whitespace-normal', "w-full", "mx-auto", "mb-4","mt-2", "py-1", "px-2", "text-center", "text-white", "shadow-xl", "font-medium", "text-base", "notification","break-words");
        
        const textNode = document.createElement('SPAN')
        textNode.textContent= this.text
        notificationNode.appendChild(textNode)

        if(this.type=== "error"){
            notificationNode.classList.add("bg-red-600")
        }
        else if(this.type === "complete"){
            notificationNode.classList.add("bg-green-600")
        }
        else{
            notificationNode.classList.add("bg-yellow-600")
        }

         this.targetNot.insertAdjacentElement('afterend', notificationNode)

    }

    deletePreviousNotification(){
        const notifications = document.querySelectorAll('.notification')
        notifications.forEach(notification => {
            notification.remove()
        });
    }
}
