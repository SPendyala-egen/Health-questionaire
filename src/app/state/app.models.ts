export interface QuestionnaireModel {
    chat: ChatModel[];
    ipAddress: string;
}

export interface ChatModel {
    message: string,
    time: Date
    type: ChatType
}

export enum ChatType {
    QUESTION,
    RESPONSE
}