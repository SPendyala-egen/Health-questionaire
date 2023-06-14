import { Injectable } from "@angular/core";
import { State } from "@ngxs/store";
import { QuestionnaireModel } from "./app.models";

@State<QuestionnaireModel>({
    name: 'global',
    defaults: {
        message: '',
        zipCode: 0
    }
  })
  @Injectable()
  export class QuestionnaireState {
    constructor() {}
  }