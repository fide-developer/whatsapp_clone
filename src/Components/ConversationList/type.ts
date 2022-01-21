export type Messages = {
    senderID: String,
    message: String,
    sentOn: String,
    isRead: Boolean 
}

export type Chat = {
    name: String,
    phoneNumber: String,
    lastMessage: Messages,
}