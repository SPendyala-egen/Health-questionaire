export class QuestionResponse {
    static readonly type = '[Questionnaire] Question Response';
    constructor(public message: string){}
  }

  export class UpdateZipCode {
    static readonly type = '[API] Update Zip Code';
    constructor(public zipCode: number){}
  }