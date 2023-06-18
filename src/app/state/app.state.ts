import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ChatType, QuestionnaireModel } from "./app.models";
import { AppServiceService } from "../app-service/app-service.service";
import { GetQuestionResponse, UpdateIPAddress } from "./app.actions";
import { tap } from "rxjs";

@State<QuestionnaireModel>({
  name: "global",
  defaults: {
    chat: [],
    ipAddress: "",
  },
})
@Injectable()
export class QuestionnaireState {
  constructor(private appSearvice: AppServiceService) {}

  //#region Actions
  @Action(UpdateIPAddress)
  getIPAddress(ctx: StateContext<QuestionnaireModel>) {
    return this.appSearvice.getIPAddress().pipe(
      tap((resp) => {
        ctx.patchState({ ipAddress: resp.ip });
      })
    );
  }

  @Action(GetQuestionResponse)
  getQuestionResponse(
    ctx: StateContext<QuestionnaireModel>,
    action: GetQuestionResponse
  ) {

    ctx.patchState({
      chat: [
        ...ctx.getState().chat,
        {
          message: action.message,
          time: new Date(),
          type: ChatType.QUESTION,
        },
      ],
    });

    return this.appSearvice.getQuestionResponse(action.message).pipe(
      tap((resp: string) => {
        ctx.patchState({
          chat: [
            ...ctx.getState().chat,
            {
              message: resp,
              time: new Date(),
              type: ChatType.RESPONSE,
            },
          ],
        });
      })
    );
  }
  //#endregion

  //#region Selectors
  @Selector()
  static chatDetails(state: QuestionnaireModel) {
    return state.chat;
  }
  //#endregion
}
